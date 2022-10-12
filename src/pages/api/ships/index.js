import axios from 'axios'

const SCURL = 'https://api.fleetyards.net/v1/models'
const BackendURL = 'https://cms.ariscorp.de'

async function getSCData(pageNo = 1) {
  let actualUrl = SCURL + `?page=${pageNo}&perPage=100`
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getEntireSCData(pageNo = 1) {
  const results = await getSCData(pageNo)
  if (results.length > 0) {
    return results.concat(await getEntireSCData(pageNo + 1))
  } else {
    return results
  }
}

async function getDirectusFiles() {
  let res = await axios.get(BackendURL + '/files?limit=-1')

  let data = res.data.data

  return data
}

async function getManufacturerCode(manufacturerSlug) {
  if (manufacturerSlug == 'aegis-dynamics') {
    return 'c600ad6e-9e2d-45c7-b468-d4a13ef0f36b'
  } else if (manufacturerSlug == 'anvil-aerospace') {
    return 'df751eb7-51cc-4776-bbca-95b6f724564f'
  } else if (manufacturerSlug == 'aopoa') {
    return 'f655fbad-1eaf-4455-9247-9a347ab51c01'
  } else if (manufacturerSlug == 'argo-astronautics') {
    return '459e72a8-30a1-4e8b-9618-813710cda902'
  } else if (manufacturerSlug == 'banu') {
    return '9ecb786c-261a-4d9a-834f-01381d678f05'
  } else if (manufacturerSlug == 'consolidated-outland') {
    return 'cdceb7f0-a66f-4115-b286-cd65eabb23da'
  } else if (manufacturerSlug == 'crusader-industries') {
    return '03438ca9-8ce1-4c0c-8d34-cff664ab3cbb'
  } else if (manufacturerSlug == 'drake-interplanetary') {
    return 'd8f18269-194c-4010-bb1e-1b273ba138d7'
  } else if (manufacturerSlug == 'esperia') {
    return '3e3cab1b-62c3-494e-9736-f5dccb5b0d1f'
  } else if (manufacturerSlug == 'gatac-manufacture') {
    return 'a164971c-a8f4-478f-875c-3c62a171b6d7'
  } else if (manufacturerSlug == 'greycat-industrial') {
    return '1f00ebe9-30c2-4b1a-a5fd-f23f4239d256'
  } else if (manufacturerSlug == 'kruger-intergalactic') {
    return 'c70bd607-f6a8-42f7-8aef-3d37f38b6588'
  } else if (manufacturerSlug == 'misc') {
    return '18b6bd97-25c6-4f92-ac3e-bd7e3b3a2c15'
  } else if (manufacturerSlug == 'origin-jumpworks') {
    return '16626069-845e-4e18-bc6b-8273fe46fc3a'
  } else if (manufacturerSlug == 'roberts-space-industries') {
    return 'c84ae261-1ef4-4582-9afc-f6893a865b0f'
  } else if (manufacturerSlug == 'tumbril') {
    return 'c5fe6da5-98e1-45d8-8ec7-ff2c9304a978'
  } else if (manufacturerSlug == 'vanduul') {
    return '724ea4a0-430a-4388-9faa-37281575ad13'
  }
}

async function getFileIds(object, Files) {
  const fileIds = {
    brochure: null,
    holo: null,
  }

  if (object.brochure != null) {
    var brochure = await Files.find(
      (element) => element.title == 'brochure-' + object.slug
    )

    if (brochure != null) {
      fileIds.brochure = brochure.id
    } else {
      brochure = await uploadFile(object.brochure, object.slug, 'brochure')
      fileIds.brochure = brochure.id
    }
  }

  if (object.holo != null) {
    var holo = await Files.find(
      (element) => element.title == 'holo-' + object.slug
    )

    if (holo != null) {
      fileIds.holo = holo.id
    } else {
      holo = await uploadFile(object.holo, object.slug, 'holo')
      fileIds.holo = holo.id
    }
  }

  return fileIds
}

async function uploadFile(url, title, fileType) {
  var folder

  if (fileType == 'brochure') {
    folder = 'a4100209-e7a7-46a1-a6c3-0272303a1a0a'
  } else if (fileType == 'holo') {
    folder = '7dd5f1c3-9a08-4477-811a-2a932b9e1c98'
  }

  const fullTitle = fileType + '-' + title

  let payload = {
    url: url,
    data: {
      title: fullTitle,
      folder: folder,
    },
  }

  let res = await axios.post(
    BackendURL +
      '/files/import?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr',
    payload
  )

  let data = await res.data.data

  return data
}

async function pushToDatastore(FileIds, manufacturer, object, index) {
  var Dataobject = {}
  const soldAt = []
  const boughtAt = []
  const listedAt = []
  const rentalAt = []
  const loaners = []

  object.soldAt.forEach((object2, index2) => {
    soldAt.push({
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
    boughtAt.push({
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
    listedAt.push({
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
    rentalAt.push({
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
    loaners.push({
      name: object2.name,
      slug: object2.slug,
    })
  })

  Dataobject = {
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
    brochure: FileIds.brochure,
    holo: FileIds.holo,
    holoColored: object.holoColored,
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
    soldAt: soldAt,
    boughtAt: boughtAt,
    listedAt: listedAt,
    rentalAt: rentalAt,
    manufacturer: manufacturer,
    loaners: loaners,
  }

  return Dataobject
}

async function postSCData() {
  const BackendFiles = await getDirectusFiles()
  const SCData = await getEntireSCData()

  var promises = SCData.map(async (object, index) => {
    const ManufacturerId = await getManufacturerCode(object.manufacturer.slug)
    const fileIds = await getFileIds(object, BackendFiles)
    const Datastore = await pushToDatastore(
      fileIds,
      ManufacturerId,
      object,
      index
    )

    return Datastore
  })
  return await Promise.all(promises)
}

export default async function handler(req, res) {
  const Datastore = await postSCData()

  if (req.method === 'GET') {
    res.status(200).json(Datastore)
  } else if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr&limit=-1'
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
  }
}
