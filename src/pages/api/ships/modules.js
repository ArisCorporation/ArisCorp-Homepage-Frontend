import axios from 'axios'

const FLURL = 'https://api.fleetyards.net/v1/models/'
const BackendURL = 'https://cms.ariscorp.de'
import { Directus } from '@directus/sdk'

const directus = new Directus(BackendURL)

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

async function getDirectusFiles() {
  let res = await axios.get(
    BackendURL +
      '/files?limit=-1&filter[folder]=fec4f425-d085-40fd-9c32-e08e69bfa476'
  )
  let data = res.data.data

  return data
}

async function uploadFile(url, title) {
  const folder = 'fec4f425-d085-40fd-9c32-e08e69bfa476'

  const fullTitle = 'module-' + title

  let payload = {
    url: url,
    data: {
      title: fullTitle,
      folder: folder,
    },
  }

  // let res = await axios.post(
  //   BackendURL + '/files/import?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg',
  //   payload
  // )

  // let data = await res.data.data

  await directus.auth.static(process.env.NEXT_PUBLIC_CMS_TOKEN)
  const data = await directus.files.import({
    url: payload.url,
    data: payload.data,
  })

  return data
}

async function getFlModules(ship) {
  const actualUrl = FLURL + ship + '/modules'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getLiveShipData() {
  const actualUrl = BackendURL + '/items/ships?fields=id,name,slug,flSlug&limit=-1'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}
async function getLiveModuleData() {
  const actualUrl = BackendURL + '/items/ship_modules?fields=id,name,slug,pledgePrice,description'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getManufacturers() {
  const actualUrl =
    BackendURL + '/items/firmen?fields=id,firmen_name,slug,code&limit=-1'
  const apiResults = await axios
    .get(actualUrl)
    .then(function (resp) {
      return resp.data
    })
    .catch((reason) => {
      console.log(reason.message)
      console.log(actualUrl)
    })

  if (apiResults) {
    return apiResults.data
  } else {
    return []
  }
}

async function formData() {
  const liveShipData = await getLiveShipData()
  const liveModuleData = await getLiveModuleData()
  const manufacturers = await getManufacturers()
  const backendFiles = await getDirectusFiles()
  const skippedModules = ['']
  const modules = []

  await Promise.all(
    liveShipData.map(async (obj) => {
      const flModules = await getFlModules(obj.flSlug)
      if(obj.flSlug == "galaxy"){
        console.log(obj.slug)
        console.log(flModules)
      }

      if (flModules[0]) {
        await Promise.all(
          await flModules?.map(async (i) => {
            if (skippedModules.includes(i.name)) {
              return
            }
            const liveData = liveModuleData.find((e) => e.name == i.name || e.slug == i.slug)
            const company = manufacturers.find(
              (e) =>
                e.code == i.manufacturer.code ||
                e.firmen_name == i.manufacturer.name
            )

            let storeImage
            if (i.storeImage) {
              const fileName = obj.slug + '-' + i.slug
              const link = i.storeImage

              if (backendFiles.find((e) => e.title == 'module-' + fileName)) {
                storeImage = backendFiles.find(
                  (e) => e.title == 'module-' + fileName
                ).id
              } else {
                const fileUpload = await uploadFile(link, fileName)
                storeImage = fileUpload.id
              }
            }

            const module = {
              name: i.name,
              slug: string_to_slug(i.name),
              pledgePrice: i.pledgePrice || liveData?.pledgePrice,
              ship: obj.id,
              manufacturer: company.id,
              productionStatus: i.productionStatus,
              storeImage,
            }

            modules.push(module)
          })
        )
      }
    })
  )

  return modules
}

export default async function handler(req, res) {
  const Datastore = await formData()
  // const Datastore = await uploadFile('https://fleetyards.net/uploads/model_paint/store_image/51/02/a624-da47-4c2d-9cac-04fbb54fce37/Star_Citizen_LunarNewYear_2023_Carrack_SKU_auspicious-4ade2b3e-bfb6-450c-93bd-5218a085f8d6.jpg', 'test-carrack', 'paint')

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    const matches = []
    await axios
      .get(
        'https://cms.ariscorp.de/items/ship_modules?access_token=' +
          process.env.NEXT_PUBLIC_CMS_TOKEN +
          '&limit=-1'
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
                `https://cms.ariscorp.de/items/ship_modules/${search.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
                object
              )
              .catch(function (error) {
                res.status(401).send(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ship_modules?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
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
