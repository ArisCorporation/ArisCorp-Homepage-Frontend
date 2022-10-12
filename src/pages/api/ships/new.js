import axios from 'axios'
import { push } from 'next-pwa/cache'
import { SYMBOL_PREVIEW_DATA } from 'next/dist/server/api-utils'

const ShipMatrixURL = 'https://robertsspaceindustries.com/ship-matrix/index'
const P4KURL = 'https://scunpacked.com/api/v2/ships.json'
const FLURL = 'https://api.fleetyards.net/v1/models'
// const FLURL = 'https://api.fleetyards.net/v1/models?page=1&perPage=240'
const RSIURL = 'https://robertsspaceindustries.com'
const BackendURL = 'https://cms.ariscorp.de'

let FLPage = 1
let FLNext = true

// const Datastore = { data: [] }

function slugify(str) {
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

// async function uploadBrochure(url, title) {
//   let payload = {
//     url: url,
//     data: {
//       title: title,
//       folder: '7dd5f1c3-9a08-4477-811a-2a932b9e1c98',
//     },
//   }

//   let res = await axios.post(
//     BackendURL +
//       '/files/import?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr',
//     payload
//   )

//   let data = res.data

//   return data
// }

async function getShipMatrixData() {
  const ShipMatrixResponse = await fetch(ShipMatrixURL)
  const ShipMatrixData = await ShipMatrixResponse.json()

  ShipMatrixData.data.forEach((object, index) => {
    Datastore.data.push({
      status: 'published',
      name: object.name,
      slug: slugify(object.name),
      production_status: object.production_status,
      pledge_url: RSIURL + object.url,
      size: object.size,
      focus: object.focus,
      type: object.type,
      length: object.length,
      beam: object.beam,
      height: object.height,
      mass: object.mass,
      cargo: object.cargocapacity,
      min_crew: object.min_crew,
      max_crew: object.max_crew,
      scm_speed: object.scm_speed,
      afterburner_speed: object.afterburner_speed,
      yaxis_acceleration: object.yaxis_acceleration,
      xaxis_acceleration: object.xaxis_acceleration,
      zaxis_acceleration: object.zaxis_acceleration,
      pitch_max: object.pitch_max,
      roll_max: object.roll_max,
      yaw_max: object.yaw_max,
      zerotoscm: object.zerotoscm,
      zerotomax: object.zerotomax,
      scmtozero: object.scmtozero,
      maxtozero: object.maxtozero,
    })
  })

  return Datastore
}

async function getP4KData() {
  await getShipMatrixData()

  const P4KResponse = await fetch(P4KURL)
  const P4KData = await P4KResponse.json()

  P4KData.forEach(async (object) => {
    var Code = ''
    const Manufacturer = await object.Manufacturer.Name
    if (Manufacturer == 'Aegis Dynamics') {
      Code = 'Aegis'
    } else if (Manufacturer == 'Anvil Aerospace') {
      Code = 'Anvil'
    } else if (Manufacturer == 'Banu') {
      Code = 'Banu'
    } else if (Manufacturer == 'Consolidated Outland') {
      Code = 'C.O.'
    } else if (Manufacturer == 'Crusader Industries') {
      Code = 'Crusader'
    } else if (Manufacturer == 'Drake Interplanetary') {
      Code = 'Drake'
    } else if (Manufacturer == 'Esperia') {
      Code = 'Esperia'
    } else if (Manufacturer == 'Gatac Manufacture') {
      Code = 'Gatac'
    } else if (Manufacturer == 'Greycat Industrial') {
      Code = 'Argo'
    } else if (Manufacturer == 'Kruger Intergalatic') {
      Code = 'Greycat'
    } else if (Manufacturer == 'Musashi Industrial & Starflight Concern') {
      Code = 'MISC'
    } else if (Manufacturer == 'Origin Jumpworks') {
      Code = 'Origin'
    } else if (Manufacturer == 'Roberts Space Industries') {
      Code = 'RSI'
    } else if (Manufacturer == 'Tumbril Land Systems') {
      Code = 'Tumbril'
    } else if (Manufacturer == 'Vanduul') {
      Code = 'Vanduul'
    } else if (Manufacturer == 'Aopoa') {
      Code = 'Aopoa'
    }

    object.Name = object.Name.replace(Code + ' ', '')
    const search = (obj) => obj.name === object.Name
    const DatastoreId = Datastore.data.findIndex(search)

    Datastore.data[DatastoreId].mass = object.Mass
    //   Datastore.data.push({
    //     status: 'published',
    //     name: object.name,
    //     slug: slugify(object.name']),
    //     production_status: object.production_status,
    //     size: object.size,
    //     focus: object.focus,
    //     type: object.type,
    //     length: object.length,
    //     beam: object.beam,
    //     height: object.height,
    //     mass: object.mass,
    //     cargo: object.cargocapacity,
    //     min_crew: object.min_crew,
    //     max_crew: object.max_crew,
    //     scm_speed: object.scm_speed,
    //     afterburner_speed: object.afterburner_speed,
    //     yaxis_acceleration: object.yaxis_acceleration,
    //     xaxis_acceleration: object.xaxis_acceleration,
    //     zaxis_acceleration: object.zaxis_acceleration,
    //     pitch_max: object.pitch_max,
    //     roll_max: object.roll_max,
    //     yaw_max: object.yaw_max,
    //     zerotoscm: object.zerotoscm,
    //     zerotomax: object.zerotomax,
    //     scmtozero: object.scmtozero,
    //     maxtozero: object.maxtozero,
    //   })
  })

  return Datastore
}

async function getSCData() {
  const Datastore = { data: [] }

  const getData = async function (pageNo = 1) {
    let actualUrl = FLURL + `?page=${pageNo}&perPage=100`
    var apiResults = await fetch(actualUrl).then((resp) => {
      return resp.json()
    })

    return apiResults
  }

  const getEntireData = async function (pageNo = 1) {
    const results = await getData(pageNo)
    console.log('Retreiving data from API for page : ' + pageNo)
    if (results.length > 0) {
      return results.concat(await getEntireData(pageNo + 1))
    } else {
      return results
    }
  }

  const SCData = await getEntireData()

  SCData.forEach(async (object, index) => {
    let manufacturerId
    if (object.manufacturer.slug == 'aegis-dynamics') {
      manufacturerId = 'c600ad6e-9e2d-45c7-b468-d4a13ef0f36b'
    } else if (object.manufacturer.slug == 'anvil-aerospace') {
      manufacturerId = 'df751eb7-51cc-4776-bbca-95b6f724564f'
    } else if (object.manufacturer.slug == 'aopoa') {
      manufacturerId = 'f655fbad-1eaf-4455-9247-9a347ab51c01'
    } else if (object.manufacturer.slug == 'argo-astronautics') {
      manufacturerId = '459e72a8-30a1-4e8b-9618-813710cda902'
    } else if (object.manufacturer.slug == 'banu') {
      manufacturerId = ''
    } else if (object.manufacturer.slug == 'consolidated-outland') {
      manufacturerId = 'cdceb7f0-a66f-4115-b286-cd65eabb23da'
    } else if (object.manufacturer.slug == 'crusader-industries') {
      manufacturerId = '03438ca9-8ce1-4c0c-8d34-cff664ab3cbb'
    } else if (object.manufacturer.slug == 'drake-interplanetary') {
      manufacturerId = 'd8f18269-194c-4010-bb1e-1b273ba138d7'
    } else if (object.manufacturer.slug == 'esperia') {
      manufacturerId = '3e3cab1b-62c3-494e-9736-f5dccb5b0d1f'
    } else if (object.manufacturer.slug == 'gatac-manufacture') {
      manufacturerId = 'a164971c-a8f4-478f-875c-3c62a171b6d7'
    } else if (object.manufacturer.slug == 'greycat-industrial') {
      manufacturerId = '1f00ebe9-30c2-4b1a-a5fd-f23f4239d256'
    } else if (object.manufacturer.slug == 'kruger-intergalactic') {
      manufacturerId = 'c70bd607-f6a8-42f7-8aef-3d37f38b6588'
    } else if (object.manufacturer.slug == 'misc') {
      manufacturerId = '18b6bd97-25c6-4f92-ac3e-bd7e3b3a2c15'
    } else if (object.manufacturer.slug == 'origin-jumpworks') {
      manufacturerId = '16626069-845e-4e18-bc6b-8273fe46fc3a'
    } else if (object.manufacturer.slug == 'roberts-space-industries') {
      manufacturerId = 'c84ae261-1ef4-4582-9afc-f6893a865b0f'
    } else if (object.manufacturer.slug == 'tumbril') {
      manufacturerId = 'c5fe6da5-98e1-45d8-8ec7-ff2c9304a978'
    } else if (object.manufacturer.slug == 'vanduul') {
      manufacturerId = ''
    }

    Datastore.data.push({
      id: object.id,
      status: 'published',
      name: object.name,
      scIdentifier: object.scIdentifier,
      erkulIdentifier: object.erkulIdentifier,
      rsiName: object.rsiName,
      slug: object.slug,
      rsiSlug: object.rsiSlug,
      length: object.length,
      beam: object.beam,
      height: object.height,
      mass: object.mass,
      cargo: object.cargo,
      hydrogenFuelTankSize: object.hydrogenFuelTankSize,
      quantumFuelTankSize: object.quantumFuelTankSize,
      minCrew: object.minCrew,
      maxCrew: object.maxCrew,
      scmSpeed: object.scmSpeed,
      afterburnerSpeed: object.afterburnerSpeed,
      groundSpeed: object.groundSpeed,
      afterburnerGroundSpeed: object.afterburnerGroundSpeed,
      pitchMax: object.pitchMax,
      yawMax: object.yawMax,
      rollMax: object.rollMax,
      xaxisAcceleration: object.xaxisAcceleration,
      yaxisAcceleration: object.yaxisAcceleration,
      zaxisAcceleration: object.zaxisAcceleration,
      size: object.size,
      sizeLabel: object.sizeLabel,
      // storeImage
      // storeImageLarge
      // storeImageMedium
      // storeImageSmall
      // brochure: brochureId,
      // holo
      // holoColored
      storeUrl: object.storeUrl,
      salesPageUrl: object.salesPageUrl,
      price: object.price,
      pledgePrice: object.pledgePrice,
      onSale: object.onSale,
      productionStatus: object.productionStatus,
      productionNote: object.productionNote,
      classification: object.classification,
      classificationLabel: object.classificationLabel,
      focus: object.focus,
      rsiId: object.rsiId,
      hasModules: object.hasModules,
      hasUpgrades: object.hasUpgrades,
      hasPaints: object.hasPaints,
      lastUpdatedAt: object.lastUpdatedAt,
      lastUpdatedAtLabel: object.lastUpdatedAtLabel,
      soldAt: [],
      boughtAt: [],
      listedAt: [],
      rentalAt: [],
      manufacturer: manufacturerId,
      loaners: [],
    })

    object.soldAt.forEach((object2, index2) => {
      Datastore.data[index].soldAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.boughtAt.forEach((object2, index2) => {
      Datastore.data[index].boughtAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.listedAt.forEach((object2, index2) => {
      Datastore.data[index].listedAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.rentalAt.forEach((object2, index2) => {
      Datastore.data[index].rentalAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.loaners.forEach((object2, index2) => {
      Datastore.data[index].loaners.push({
        name: object2.name,
        slug: object2.slug,
      })
    })
  })

  return test
}

async function postSCData() {
  const Datastore = { data: [] }

  const getData = async function (pageNo = 1) {
    let actualUrl = FLURL + `?page=${pageNo}`
    var apiResults = await fetch(actualUrl).then((resp) => {
      return resp.json()
    })

    return apiResults
  }

  const getEntireData = async function (pageNo = 1) {
    const results = await getData(pageNo)
    if (results.length > 0) {
      return results.concat(await getEntireData(pageNo + 1))
    } else {
      return results
    }
  }

  async function getDirectusFiles() {
    let res = await axios.get(BackendURL + '/files?limit=-1')

    let data = res.data.data

    return data
  }

  const SCData = await getEntireData()
  const BackendFiles = await getDirectusFiles()

  async function uploadBrochure(url, title) {
    let payload = {
      url: url,
      data: {
        title: title,
        folder: '7dd5f1c3-9a08-4477-811a-2a932b9e1c98',
      },
    }

    let res = await axios.post(
      BackendURL +
        '/files/import?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr',
      payload
    )

    let data = await res.data.data

    return await data
  }

  async function getManufacturerCode(manufacturer) {
    if (manufacturer == 'aegis-dynamics') {
      return 'c600ad6e-9e2d-45c7-b468-d4a13ef0f36b'
    } else if (manufacturer == 'anvil-aerospace') {
      return 'df751eb7-51cc-4776-bbca-95b6f724564f'
    } else if (manufacturer == 'aopoa') {
      return 'f655fbad-1eaf-4455-9247-9a347ab51c01'
    } else if (manufacturer == 'argo-astronautics') {
      return '459e72a8-30a1-4e8b-9618-813710cda902'
    } else if (manufacturer == 'banu') {
      return ''
    } else if (manufacturer == 'consolidated-outland') {
      return 'cdceb7f0-a66f-4115-b286-cd65eabb23da'
    } else if (manufacturer == 'crusader-industries') {
      return '03438ca9-8ce1-4c0c-8d34-cff664ab3cbb'
    } else if (manufacturer == 'drake-interplanetary') {
      return 'd8f18269-194c-4010-bb1e-1b273ba138d7'
    } else if (manufacturer == 'esperia') {
      return '3e3cab1b-62c3-494e-9736-f5dccb5b0d1f'
    } else if (manufacturer == 'gatac-manufacture') {
      return 'a164971c-a8f4-478f-875c-3c62a171b6d7'
    } else if (manufacturer == 'greycat-industrial') {
      return '1f00ebe9-30c2-4b1a-a5fd-f23f4239d256'
    } else if (manufacturer == 'kruger-intergalactic') {
      return 'c70bd607-f6a8-42f7-8aef-3d37f38b6588'
    } else if (manufacturer == 'misc') {
      return '18b6bd97-25c6-4f92-ac3e-bd7e3b3a2c15'
    } else if (manufacturer == 'origin-jumpworks') {
      return '16626069-845e-4e18-bc6b-8273fe46fc3a'
    } else if (manufacturer == 'roberts-space-industries') {
      return 'c84ae261-1ef4-4582-9afc-f6893a865b0f'
    } else if (manufacturer == 'tumbril') {
      return 'c5fe6da5-98e1-45d8-8ec7-ff2c9304a978'
    } else if (manufacturer == 'vanduul') {
      return ''
    }
  }

  // async function getBrochureId(allFiles, newBrochure, newName) {
  //   const OrgBrochure = await allFiles.find(
  //     (element) => element.title == newName
  //   )

  //   if ((await OrgBrochure) != null) {
  //     return await OrgBrochure.id
  //   } else {
  //     const uploadedBrochure = await uploadBrochure(newBrochure, newName)
  //     return await uploadedBrochure.id
  //   }
  // }

  async function getBrochureId(allFiles, newBrochure, newName) {
    const OrgBrochure = await allFiles.find(
      (element) => element.title == newName
    )

    if (OrgBrochure != null) {
      return OrgBrochure
    } else {
      return null
    }
  }

  async function uploadBrochure(allFiles, newBrochure, newName) {

    const OrgBrochure = await allFiles.find(
      (element) => element.title == newName
    )

    if (OrgBrochure != null) {
      return
    } else {
      const uploadedBrochure = await uploadBrochure(newBrochure, newName)
      return
    }
  }

  SCData.forEach(async (object, index) => {
    if (object.brochure != null) {
      return await uploadBrochure(BackendFiles, object.brochure, object.slug)
    } else {
      return null
    }
  })

  SCData.forEach(async (object, index) => {
    const manufacturerId = await getManufacturerCode(object.manufacturer.slug)

    const OrgBrochure = await BackendFiles.find(
      (element) => element.title == object.slug
    )

    let brochureId

    if (OrgBrochure != null) {
      brochureId = OrgBrochure.id
    } else {
      brochureId = null
    }

    Datastore.data.push({
      id: object.id,
      status: 'published',
      name: object.name,
      scIdentifier: object.scIdentifier,
      erkulIdentifier: object.erkulIdentifier,
      rsiName: object.rsiName,
      slug: object.slug,
      rsiSlug: object.rsiSlug,
      length: object.length,
      beam: object.beam,
      height: object.height,
      mass: object.mass,
      cargo: object.cargo,
      hydrogenFuelTankSize: object.hydrogenFuelTankSize,
      quantumFuelTankSize: object.quantumFuelTankSize,
      minCrew: object.minCrew,
      maxCrew: object.maxCrew,
      scmSpeed: object.scmSpeed,
      afterburnerSpeed: object.afterburnerSpeed,
      groundSpeed: object.groundSpeed,
      afterburnerGroundSpeed: object.afterburnerGroundSpeed,
      pitchMax: object.pitchMax,
      yawMax: object.yawMax,
      rollMax: object.rollMax,
      xaxisAcceleration: object.xaxisAcceleration,
      yaxisAcceleration: object.yaxisAcceleration,
      zaxisAcceleration: object.zaxisAcceleration,
      size: object.size,
      sizeLabel: object.sizeLabel,
      // storeImage
      // storeImageLarge
      // storeImageMedium
      // storeImageSmall
      brochure: brochureId,
      // holo
      // holoColored
      storeUrl: object.storeUrl,
      salesPageUrl: object.salesPageUrl,
      price: object.price,
      pledgePrice: object.pledgePrice,
      onSale: object.onSale,
      productionStatus: object.productionStatus,
      productionNote: object.productionNote,
      classification: object.classification,
      classificationLabel: object.classificationLabel,
      focus: object.focus,
      rsiId: object.rsiId,
      hasModules: object.hasModules,
      hasUpgrades: object.hasUpgrades,
      hasPaints: object.hasPaints,
      lastUpdatedAt: object.lastUpdatedAt,
      lastUpdatedAtLabel: object.lastUpdatedAtLabel,
      soldAt: [],
      boughtAt: [],
      listedAt: [],
      rentalAt: [],
      manufacturer: manufacturerId,
      loaners: [],
    })

    object.soldAt.forEach((object2, index2) => {
      Datastore.data[index].soldAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.boughtAt.forEach((object2, index2) => {
      Datastore.data[index].boughtAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.listedAt.forEach((object2, index2) => {
      Datastore.data[index].listedAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.rentalAt.forEach((object2, index2) => {
      Datastore.data[index].rentalAt.push({
        name: object2.name,
        slug: object2.slug,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        category: object2.category,
        subCategory: object2.subCategory,
        subCategoryLabel: object2.subCategoryLabel,
        pricePerUnit: object2.pricePerUnit,
        sellPrice: object2.sellPrice,
        averageSellPrice: object2.averageSellPrice,
        buyPrice: object2.buyPrice,
        averageBuyPrice: object2.averageBuyPrice,
        rentalPrice1Day: object2.rentalPrice1Day,
        averageRentalPrice1Day: object2.averageRentalPrice1Day,
        rentalPrice3Days: object2.rentalPrice3Days,
        averageRentalPrice3Days: object2.averageRentalPrice3Days,
        rentalPrice7Days: object2.rentalPrice7Days,
        averageRentalPrice7Days: object2.averageRentalPrice7Days,
        rentalPrice30Days: object2.rentalPrice30Days,
        averageRentalPrice30Days: object2.averageRentalPrice30Days,
        confirmed: object2.confirmed,
        commodityItemType: object2.commodityItemType,
        commodityItemId: object2.commodityItemId,
        shop: object2.shop.id,
      })
    })

    object.loaners.forEach((object2, index2) => {
      Datastore.data[index].loaners.push({
        name: object2.name,
        slug: object2.slug,
      })
    })

    return Datastore
  })

  return await Datastore
}

async function dpostSCData() {
  const Datastore = { data: [] }

  const getData = async function (pageNo = 1) {
    let actualUrl = FLURL + `?page=${pageNo}&perPage=100`
    var apiResults = await fetch(actualUrl).then((resp) => {
      return resp.json()
    })

    return apiResults
  }

  const getEntireData = async function (pageNo = 1) {
    const results = await getData(pageNo)
    if (results.length > 0) {
      return results.concat(await getEntireData(pageNo + 1))
    } else {
      return results
    }
  }

  const getDirectusData = async function () {
    let res = await axios.get(BackendURL + '/items/ships?limit=-1')

    let data = res.data.data

    return data
  }

  const getDirectusFiles = async function () {
    let res = await axios.get(BackendURL + '/files?limit=-1')

    let data = res.data.data

    return data
  }

  const SCData = await getEntireData()
  const BackendData = await getDirectusData()
  const BackendFiles = await getDirectusFiles()

  SCData.forEach(async (object, index) => {
    let manufacturerId
    if (object.manufacturer.slug == 'aegis-dynamics') {
      manufacturerId = 'c600ad6e-9e2d-45c7-b468-d4a13ef0f36b'
    } else if (object.manufacturer.slug == 'anvil-aerospace') {
      manufacturerId = 'df751eb7-51cc-4776-bbca-95b6f724564f'
    } else if (object.manufacturer.slug == 'aopoa') {
      manufacturerId = 'f655fbad-1eaf-4455-9247-9a347ab51c01'
    } else if (object.manufacturer.slug == 'argo-astronautics') {
      manufacturerId = '459e72a8-30a1-4e8b-9618-813710cda902'
    } else if (object.manufacturer.slug == 'banu') {
      manufacturerId = ''
    } else if (object.manufacturer.slug == 'consolidated-outland') {
      manufacturerId = 'cdceb7f0-a66f-4115-b286-cd65eabb23da'
    } else if (object.manufacturer.slug == 'crusader-industries') {
      manufacturerId = '03438ca9-8ce1-4c0c-8d34-cff664ab3cbb'
    } else if (object.manufacturer.slug == 'drake-interplanetary') {
      manufacturerId = 'd8f18269-194c-4010-bb1e-1b273ba138d7'
    } else if (object.manufacturer.slug == 'esperia') {
      manufacturerId = '3e3cab1b-62c3-494e-9736-f5dccb5b0d1f'
    } else if (object.manufacturer.slug == 'gatac-manufacture') {
      manufacturerId = 'a164971c-a8f4-478f-875c-3c62a171b6d7'
    } else if (object.manufacturer.slug == 'greycat-industrial') {
      manufacturerId = '1f00ebe9-30c2-4b1a-a5fd-f23f4239d256'
    } else if (object.manufacturer.slug == 'kruger-intergalactic') {
      manufacturerId = 'c70bd607-f6a8-42f7-8aef-3d37f38b6588'
    } else if (object.manufacturer.slug == 'misc') {
      manufacturerId = '18b6bd97-25c6-4f92-ac3e-bd7e3b3a2c15'
    } else if (object.manufacturer.slug == 'origin-jumpworks') {
      manufacturerId = '16626069-845e-4e18-bc6b-8273fe46fc3a'
    } else if (object.manufacturer.slug == 'roberts-space-industries') {
      manufacturerId = 'c84ae261-1ef4-4582-9afc-f6893a865b0f'
    } else if (object.manufacturer.slug == 'tumbril') {
      manufacturerId = 'c5fe6da5-98e1-45d8-8ec7-ff2c9304a978'
    } else if (object.manufacturer.slug == 'vanduul') {
      manufacturerId = ''
    }

    let brochureId
    const BackendObject = await BackendData.find(
      (element) => element.slug == object.slug
    )

    // if (BackendObject != null) {
    //   if (BackendObject.brochureImported == false) {
    //     const uploadedBrochure = await uploadBrochure(
    //       object.brochure,
    //       object.name
    //     )
    //     brochureId = uploadedBrochure.data.id
    //   } else {
    //     brochureId = BackendObject.brochure
    //   }
    // } else {
    //   const orgBrochure = await BackendFiles.find(
    //     (element) => element.title == object.name
    //   )

    //   if (orgBrochure != null) {
    //     brochureId = orgBrochure.id
    //   } else {
    //     const uploadedBrochure = await uploadBrochure(
    //       object.brochure,
    //       object.name
    //     )
    //     brochureId = uploadedBrochure.data.id
    //   }
    // }

    // console.log(object.brochure);
    // console.log(object.name);
    console.log(BackendObject.brochureImported)

    async function pushToDatastore() {
      Datastore.data.push({
        id: object.id,
        status: 'published',
        name: object.name,
        scIdentifier: object.scIdentifier,
        erkulIdentifier: object.erkulIdentifier,
        rsiName: object.rsiName,
        slug: object.slug,
        rsiSlug: object.rsiSlug,
        length: object.length,
        beam: object.beam,
        height: object.height,
        mass: object.mass,
        cargo: object.cargo,
        hydrogenFuelTankSize: object.hydrogenFuelTankSize,
        quantumFuelTankSize: object.quantumFuelTankSize,
        minCrew: object.minCrew,
        maxCrew: object.maxCrew,
        scmSpeed: object.scmSpeed,
        afterburnerSpeed: object.afterburnerSpeed,
        groundSpeed: object.groundSpeed,
        afterburnerGroundSpeed: object.afterburnerGroundSpeed,
        pitchMax: object.pitchMax,
        yawMax: object.yawMax,
        rollMax: object.rollMax,
        xaxisAcceleration: object.xaxisAcceleration,
        yaxisAcceleration: object.yaxisAcceleration,
        zaxisAcceleration: object.zaxisAcceleration,
        size: object.size,
        sizeLabel: object.sizeLabel,
        // storeImage
        // storeImageLarge
        // storeImageMedium
        // storeImageSmall
        brochure: brochureId,
        // holo
        // holoColored
        storeUrl: object.storeUrl,
        salesPageUrl: object.salesPageUrl,
        price: object.price,
        pledgePrice: object.pledgePrice,
        onSale: object.onSale,
        productionStatus: object.productionStatus,
        productionNote: object.productionNote,
        classification: object.classification,
        classificationLabel: object.classificationLabel,
        focus: object.focus,
        rsiId: object.rsiId,
        hasModules: object.hasModules,
        hasUpgrades: object.hasUpgrades,
        hasPaints: object.hasPaints,
        lastUpdatedAt: object.lastUpdatedAt,
        lastUpdatedAtLabel: object.lastUpdatedAtLabel,
        soldAt: [],
        boughtAt: [],
        listedAt: [],
        rentalAt: [],
        manufacturer: manufacturerId,
        loaners: [],
      })

      object.soldAt.forEach((object2, index2) => {
        Datastore.data[index].soldAt.push({
          name: object2.name,
          slug: object2.slug,
          // storeImage
          // storeImageLarge
          // storeImageMedium
          // storeImageSmall
          category: object2.category,
          subCategory: object2.subCategory,
          subCategoryLabel: object2.subCategoryLabel,
          pricePerUnit: object2.pricePerUnit,
          sellPrice: object2.sellPrice,
          averageSellPrice: object2.averageSellPrice,
          buyPrice: object2.buyPrice,
          averageBuyPrice: object2.averageBuyPrice,
          rentalPrice1Day: object2.rentalPrice1Day,
          averageRentalPrice1Day: object2.averageRentalPrice1Day,
          rentalPrice3Days: object2.rentalPrice3Days,
          averageRentalPrice3Days: object2.averageRentalPrice3Days,
          rentalPrice7Days: object2.rentalPrice7Days,
          averageRentalPrice7Days: object2.averageRentalPrice7Days,
          rentalPrice30Days: object2.rentalPrice30Days,
          averageRentalPrice30Days: object2.averageRentalPrice30Days,
          confirmed: object2.confirmed,
          commodityItemType: object2.commodityItemType,
          commodityItemId: object2.commodityItemId,
          shop: object2.shop.id,
        })
      })

      object.boughtAt.forEach((object2, index2) => {
        Datastore.data[index].boughtAt.push({
          name: object2.name,
          slug: object2.slug,
          // storeImage
          // storeImageLarge
          // storeImageMedium
          // storeImageSmall
          category: object2.category,
          subCategory: object2.subCategory,
          subCategoryLabel: object2.subCategoryLabel,
          pricePerUnit: object2.pricePerUnit,
          sellPrice: object2.sellPrice,
          averageSellPrice: object2.averageSellPrice,
          buyPrice: object2.buyPrice,
          averageBuyPrice: object2.averageBuyPrice,
          rentalPrice1Day: object2.rentalPrice1Day,
          averageRentalPrice1Day: object2.averageRentalPrice1Day,
          rentalPrice3Days: object2.rentalPrice3Days,
          averageRentalPrice3Days: object2.averageRentalPrice3Days,
          rentalPrice7Days: object2.rentalPrice7Days,
          averageRentalPrice7Days: object2.averageRentalPrice7Days,
          rentalPrice30Days: object2.rentalPrice30Days,
          averageRentalPrice30Days: object2.averageRentalPrice30Days,
          confirmed: object2.confirmed,
          commodityItemType: object2.commodityItemType,
          commodityItemId: object2.commodityItemId,
          shop: object2.shop.id,
        })
      })

      object.listedAt.forEach((object2, index2) => {
        Datastore.data[index].listedAt.push({
          name: object2.name,
          slug: object2.slug,
          // storeImage
          // storeImageLarge
          // storeImageMedium
          // storeImageSmall
          category: object2.category,
          subCategory: object2.subCategory,
          subCategoryLabel: object2.subCategoryLabel,
          pricePerUnit: object2.pricePerUnit,
          sellPrice: object2.sellPrice,
          averageSellPrice: object2.averageSellPrice,
          buyPrice: object2.buyPrice,
          averageBuyPrice: object2.averageBuyPrice,
          rentalPrice1Day: object2.rentalPrice1Day,
          averageRentalPrice1Day: object2.averageRentalPrice1Day,
          rentalPrice3Days: object2.rentalPrice3Days,
          averageRentalPrice3Days: object2.averageRentalPrice3Days,
          rentalPrice7Days: object2.rentalPrice7Days,
          averageRentalPrice7Days: object2.averageRentalPrice7Days,
          rentalPrice30Days: object2.rentalPrice30Days,
          averageRentalPrice30Days: object2.averageRentalPrice30Days,
          confirmed: object2.confirmed,
          commodityItemType: object2.commodityItemType,
          commodityItemId: object2.commodityItemId,
          shop: object2.shop.id,
        })
      })

      object.rentalAt.forEach((object2, index2) => {
        Datastore.data[index].rentalAt.push({
          name: object2.name,
          slug: object2.slug,
          // storeImage
          // storeImageLarge
          // storeImageMedium
          // storeImageSmall
          category: object2.category,
          subCategory: object2.subCategory,
          subCategoryLabel: object2.subCategoryLabel,
          pricePerUnit: object2.pricePerUnit,
          sellPrice: object2.sellPrice,
          averageSellPrice: object2.averageSellPrice,
          buyPrice: object2.buyPrice,
          averageBuyPrice: object2.averageBuyPrice,
          rentalPrice1Day: object2.rentalPrice1Day,
          averageRentalPrice1Day: object2.averageRentalPrice1Day,
          rentalPrice3Days: object2.rentalPrice3Days,
          averageRentalPrice3Days: object2.averageRentalPrice3Days,
          rentalPrice7Days: object2.rentalPrice7Days,
          averageRentalPrice7Days: object2.averageRentalPrice7Days,
          rentalPrice30Days: object2.rentalPrice30Days,
          averageRentalPrice30Days: object2.averageRentalPrice30Days,
          confirmed: object2.confirmed,
          commodityItemType: object2.commodityItemType,
          commodityItemId: object2.commodityItemId,
          shop: object2.shop.id,
        })
      })

      object.loaners.forEach((object2, index2) => {
        Datastore.data[index].loaners.push({
          name: object2.name,
          slug: object2.slug,
        })
      })
    }

    await pushToDatastore()
  })

  return Datastore
}

export default async function handler(req, res) {
  const Datastore = await postSCData()

  if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr&limit=1200'
      )
      .then((resp) => {
        Datastore.data.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find(
            (element) => element.slug == object.slug
          )
          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {
                console.log(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {
                console.log(error)
              })
          }
        })
      })
    res.status(200).send('Succesfully updated ship data')
  } else if (req.method === 'GET') {
    // const test1 = await uploadBrochure(
    //   'https://fleetyards.net/uploads/model/brochure/bd/06/2120-034e-4bdc-a979-9b02644b5f3c/origin600i-brochure-optimised.pdf',
    //   'test'
    // )
    res.status(200).json(Datastore)
  }
}
