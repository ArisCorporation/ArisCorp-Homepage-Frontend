import axios from 'axios'
import slugify from 'slugify'

const BackendURL = 'https://cms.ariscorp.de'
const P4kURL =
  'https://raw.githubusercontent.com/ArisCorporation/p4k/main/latest/json/'

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

async function getShipItems() {
  const actualUrl = P4kURL + 'ship-items.json'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getComponents() {
  const items = await getShipItems()

  const powerplants = items.filter((e) => e.type == 'PowerPlant')
  const shields = items.filter((e) => e.type == 'Shield')
  const coolers = items.filter((e) => e.type == 'Cooler')
  const quantumdrives = items.filter((e) => e.type == 'QuantumDrive')

  const components = [...powerplants, ...shields, ...coolers, ...quantumdrives]

  return components
}

async function getManufacturers() {
  const actualUrl =
    BackendURL +
    '/items/firmen?fields=id,firmen_name,slug,code&limit=-1'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function formData() {
  const rawComponents = await getComponents()
  const manufacturers = await getManufacturers()

  const components = []

  await Promise.all(
    rawComponents.map(async (obj) => {
      if (
        obj.stdItem.Name.includes('test') ||
        obj.stdItem.Name.includes('SCItem') ||
        obj.stdItem.Name.includes('TEMP') ||
        obj.stdItem.Name.includes('Generator') ||
        obj.stdItem.Name === 'Main Powerplant' ||
        obj.stdItem.Name === 'MASTER_PowerPlant' ||
        obj.stdItem.Name === 'S42_Chemline_PowerPlant'
      ) {
        return
      }
      const slug = string_to_slug(obj.stdItem.Name.toLowerCase())
      const company = manufacturers.filter((e) => e.code === obj.manufacturer)[0]

      const component = {
        status: 'published',
        name: obj.stdItem.Name,
        slug,
        type: obj?.type.toLowerCase(),
        size: obj.stdItem?.Size,
        grade: obj.stdItem?.Grade,
        manufacturer: company?.id,
        description: obj.stdItem?.Description,

        durabilityHealth: obj.stdItem?.Durability?.Health,
        durabilityLifetime: obj.stdItem?.Durability?.Lifetime,
        powerConnectionBase: obj.stdItem?.PowerConnection?.PowerBase,
        powerConnectionDraw: obj.stdItem?.PowerConnection?.PowerDraw,
        heatConnectionThermalEnergyBase: obj.stdItem?.HeatConnection?.ThermalEnergyBase,
        heatConnectionThermalEnergyDraw: obj.stdItem?.HeatConnection?.ThermalEnergyDraw,
        heatConnectionCoolingRate: obj.stdItem?.HeatConnection?.CoolingRate,


        ppOutput: obj.stdItem?.PowerPlant?.Output,

        shieldHealth: obj.stdItem?.Shield?.Health,
        shieldRegeneration: obj.stdItem?.Shield?.Regeneration,
        shieldDownedDelay: obj.stdItem?.Shield?.DownedDelay,
        shieldDamageDelay: obj.stdItem?.Shield?.DamageDelay,

        coolerRate: obj.stdItem?.Cooler?.Rate,

        qdFuelRate: obj.stdItem?.QuantumDrive?.FuelRate,
        qdJumpRange: obj.stdItem?.QuantumDrive?.JumpRange,
        qdStandardJumpSpeed: obj.stdItem?.QuantumDrive?.StandardJump?.Speed,
        qdStandardJumpCooldown: obj.stdItem?.QuantumDrive?.StandardJump?.Cooldown,
        qdStandardJumpStage1Acc: obj.stdItem?.QuantumDrive?.StandardJump?.Stage1AccelerationRate,
        qdStandardJumpStage2Acc: obj.stdItem?.QuantumDrive?.StandardJump?.Stage2AccelerationRate,
        qdStandardJumpSpoolUpTime: obj.stdItem?.QuantumDrive?.StandardJump?.SpoolUpTime,
        qdSplineJumpSpeed: obj.stdItem?.QuantumDrive?.SplineJump?.Speed,
        qdSplineJumpCooldown: obj.stdItem?.QuantumDrive?.SplineJump?.Cooldown,
        qdSplineJumpStage1Acc: obj.stdItem?.QuantumDrive?.SplineJump?.Stage1AccelerationRate,
        qdSplineJumpStage2Acc: obj.stdItem?.QuantumDrive?.SplineJump?.Stage2AccelerationRate,
        qdSplineJumpSpoolUpTime: obj.stdItem?.QuantumDrive?.SplineJump?.SpoolUpTime,
      }

      components.push(component)
    })
  )

  return components
}
// 276
export default async function handler(req, res) {
  const Datastore = await formData()

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/components?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg&limit=-1'
      )
      .then((resp) => {
        Datastore.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find(
            (element) => element.slug == object.slug
          )
          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/components/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
                object
              )
              .catch(function (error) {})
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/components?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
                object
              )
              .catch(function (error) {
                res.status(401).send(error)
              })
          }
        })
      })
    res.status(200).send(Datastore)
  }
}
