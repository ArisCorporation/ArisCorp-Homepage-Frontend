import axios from 'axios'

const FLURL = 'https://api.fleetyards.net/v1/models/'
const BackendURL = 'https://cms.ariscorp.de/'

async function getLiveData() {
  let actualUrl = BackendURL + `items/ships?limit=-1`
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function fetchSlugs() {
  let actualUrl = FLURL + 'slugs'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getSlugs() {
  const results = await fetchSlugs()
  return results
}

async function fetchShip(slug) {
  let actualUrl = FLURL + slug
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getShip(slug) {
  const results = await fetchShip(slug)
  if (results.length > 0) {
    return results
  }
}

async function fetchHardpoints(slug) {
  let actualUrl = FLURL + slug + '/hardpoints'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getHardpoints(slug) {
  const results = await fetchHardpoints(slug)
  if (results.length > 0) {
    return results
  }
}

async function fetchModules(slug) {
  let actualUrl = FLURL + slug + '/modules'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getModules(slug) {
  const results = await fetchModules(slug)
  if (results.length > 0) {
    return results
  }
}

async function fetchPaints(slug) {
  let actualUrl = FLURL + slug + '/paints'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getPaints(slug) {
  const results = await fetchPaints(slug)
  if (results.length > 0) {
    return results
  }
}

async function fetchVariants(slug) {
  let actualUrl = FLURL + slug + '/variants'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getVariants(slug) {
  const results = await fetchVariants(slug)
  if (results.length > 0) {
    return results
  }
}

async function fetchLoaners(slug) {
  let actualUrl = FLURL + slug + '/loaners'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getLoaners(slug) {
  const results = await fetchLoaners(slug)
  if (results.length > 0) {
    return results
  }
}

async function getDirectusFiles() {
  let res = await axios.get(BackendURL + 'files?limit=-1')

  let data = res.data.data

  return data
}

async function formData() {
  const slugs = await getSlugs()
  // const BackendFiles = await getDirectusFiles()
  const liveData = await getLiveData()
  const ships = []
  await Promise.all(
    slugs.map(async (object) => {
      const shipData = await getShip(object)
      if (object.startsWith('geotack')) {
        return
      }
      const manufacturer = await getManufacturerCode(shipData.manufacturer.slug)
      const shipHardpoints = await getHardpoints(object)
      const shipModules = await getModules(object)
      const shipPaints = await getPaints(object)

      const shipLoaners = await getLoaners(object)
      const shipVariants = await getVariants(object)
      const soldAt = []
      const boughtAt = []
      const listedAt = []
      const rentalAt = []
      const hardpoints = []
      const modules = []
      const paints = []
      const variants = []
      const loaners = []

      shipData.soldAt.forEach((obj, i) => {
        soldAt.push({
          name: obj.name,
          slug: obj.slug,
          category: obj.category,
          subCategory: obj.subCategory,
          subCategoryLabel: obj.subCategoryLabel,
          pricePerUnit: obj.pricePerUnit,
          sellPrice: obj.sellPrice,
          averageSellPrice: obj.averageSellPrice,
          buyPrice: obj.buyPrice,
          averageBuyPrice: obj.averageBuyPrice,
          rentalPrice1Day: obj.rentalPrice1Day,
          averageRentalPrice1Day: obj.averageRentalPrice1Day,
          rentalPrice3Days: obj.rentalPrice3Days,
          averageRentalPrice3Days: obj.averageRentalPrice3Days,
          rentalPrice7Days: obj.rentalPrice7Days,
          averageRentalPrice7Days: obj.averageRentalPrice7Days,
          rentalPrice30Days: obj.rentalPrice30Days,
          averageRentalPrice30Days: obj.averageRentalPrice30Days,
          confirmed: obj.confirmed,
          commodityItemType: obj.commodityItemType,
          commodityItemId: obj.commodityItemId,
          shop: obj.shop.id,
        })
      })

      shipData.boughtAt.forEach((obj, i) => {
        boughtAt.push({
          name: obj.name,
          slug: obj.slug,
          category: obj.category,
          subCategory: obj.subCategory,
          subCategoryLabel: obj.subCategoryLabel,
          pricePerUnit: obj.pricePerUnit,
          sellPrice: obj.sellPrice,
          averageSellPrice: obj.averageSellPrice,
          buyPrice: obj.buyPrice,
          averageBuyPrice: obj.averageBuyPrice,
          rentalPrice1Day: obj.rentalPrice1Day,
          averageRentalPrice1Day: obj.averageRentalPrice1Day,
          rentalPrice3Days: obj.rentalPrice3Days,
          averageRentalPrice3Days: obj.averageRentalPrice3Days,
          rentalPrice7Days: obj.rentalPrice7Days,
          averageRentalPrice7Days: obj.averageRentalPrice7Days,
          rentalPrice30Days: obj.rentalPrice30Days,
          averageRentalPrice30Days: obj.averageRentalPrice30Days,
          confirmed: obj.confirmed,
          commodityItemType: obj.commodityItemType,
          commodityItemId: obj.commodityItemId,
          shop: obj.shop.id,
        })
      })

      shipData.listedAt.forEach((obj, i) => {
        listedAt.push({
          name: obj.name,
          slug: obj.slug,
          category: obj.category,
          subCategory: obj.subCategory,
          subCategoryLabel: obj.subCategoryLabel,
          pricePerUnit: obj.pricePerUnit,
          sellPrice: obj.sellPrice,
          averageSellPrice: obj.averageSellPrice,
          buyPrice: obj.buyPrice,
          averageBuyPrice: obj.averageBuyPrice,
          rentalPrice1Day: obj.rentalPrice1Day,
          averageRentalPrice1Day: obj.averageRentalPrice1Day,
          rentalPrice3Days: obj.rentalPrice3Days,
          averageRentalPrice3Days: obj.averageRentalPrice3Days,
          rentalPrice7Days: obj.rentalPrice7Days,
          averageRentalPrice7Days: obj.averageRentalPrice7Days,
          rentalPrice30Days: obj.rentalPrice30Days,
          averageRentalPrice30Days: obj.averageRentalPrice30Days,
          confirmed: obj.confirmed,
          commodityItemType: obj.commodityItemType,
          commodityItemId: obj.commodityItemId,
          shop: obj.shop.id,
        })
      })

      shipData.rentalAt.forEach((obj, i) => {
        rentalAt.push({
          name: obj.name,
          slug: obj.slug,
          category: obj.category,
          subCategory: obj.subCategory,
          subCategoryLabel: obj.subCategoryLabel,
          pricePerUnit: obj.pricePerUnit,
          sellPrice: obj.sellPrice,
          averageSellPrice: obj.averageSellPrice,
          buyPrice: obj.buyPrice,
          averageBuyPrice: obj.averageBuyPrice,
          rentalPrice1Day: obj.rentalPrice1Day,
          averageRentalPrice1Day: obj.averageRentalPrice1Day,
          rentalPrice3Days: obj.rentalPrice3Days,
          averageRentalPrice3Days: obj.averageRentalPrice3Days,
          rentalPrice7Days: obj.rentalPrice7Days,
          averageRentalPrice7Days: obj.averageRentalPrice7Days,
          rentalPrice30Days: obj.rentalPrice30Days,
          averageRentalPrice30Days: obj.averageRentalPrice30Days,
          confirmed: obj.confirmed,
          commodityItemType: obj.commodityItemType,
          commodityItemId: obj.commodityItemId,
          shop: obj.shop.id,
        })
      })

      if (shipHardpoints) {
        shipHardpoints.map((obj, i) => {
          const loadouts = []
          let hardpoint = {
            type: obj.type,
            group: obj.group,
            category: obj.category,
            size: obj.size,
            name: obj.name,
            loadoutIdentifier: obj.loadoutIdentifier,
            key: obj.key,
            mount: obj.mount,
            itemSlots: obj.itemSlots,
            loadouts,
          }
          if (obj.component) {
            hardpoint.componentName = obj.component.name
            hardpoint.componentSlug = obj.component.slug
            hardpoint.componentGrade = obj.component.grade
            hardpoint.componentSize = obj.component.size
            hardpoint.componentType = obj.component.type
            hardpoint.componentItemClass = obj.component.itemClass
            hardpoint.componentManufacturer = obj.component.manufacturer?.slug
            hardpoint.componentLoadouts = obj.component.loadouts
          }
          if (obj.component?.loadouts) {
            obj.component.loadouts.forEach((obj2) => {
              hardpoint.loadouts.push({
                name: obj2.name,
                componentName: obj2.component.name,
                componentSlug: obj2.component.slug,
                componentGrade: obj2.component.grade,
                componentSize: obj2.component.size,
                componentType: obj2.component.type,
                componentItemClass: obj2.component.itemClass,
                componentManufacturer: obj2.component.manufacturer.slug,
              })
            })
          }
          hardpoints.push(hardpoint)
        })
      }

      if (shipModules) {
        shipModules.map((obj, i) => {
          modules.push({
            name: obj.name,
            pledgePrice: parseFloat(obj.pledgePrice),
            productionStatus: obj.productionStatus,
            manufacturer: obj.manufacturer,
          })
        })
      }

      if (shipPaints) {
        shipPaints.map((obj, i) => {
          paints.push({
            name: obj.name,
            slug: obj.slug,
            nameWithModel: obj.nameWithModel,
          })
        })
      }

      if (shipVariants) {
        shipVariants.forEach((obj, i) => {
          const variant = liveData.filter((e) => e.apiid === obj.id)[0]
          if (variant) {
            variants.push(variant.id)
          } else {
            return
          }
        })
      }

      if (shipLoaners) {
        shipLoaners.forEach((obj, i) => {
          const loaner = liveData.filter((e) => e.apiid === obj.id)[0]
          if (loaner) {
            loaners.push(loaner.id)
          } else {
            return
          }
        })
      }

      const ship = {
        status: 'published',
        name: shipData.name,
        scIdentifier: shipData.scIdentifier,
        erkulIdentifier: shipData.erkulIdentifier,
        rsiName: shipData.rsiName,
        slug: shipData.slug,
        rsiSlug: shipData.rsiSlug,
        apiid: shipData.id,
        length: shipData.length,
        beam: shipData.beam,
        height: shipData.height,
        mass: shipData.mass,
        cargo: shipData.cargo,
        hydrogenFuelTankSize: shipData.hydrogenFuelTankSize,
        quantumFuelTankSize: shipData.quantumFuelTankSize,
        minCrew: shipData.minCrew,
        maxCrew: shipData.maxCrew,
        scmSpeed: shipData.scmSpeed,
        afterburnerSpeed: shipData.afterburnerSpeed,
        groundSpeed: shipData.groundSpeed,
        afterburnerGroundSpeed: shipData.afterburnerGroundSpeed,
        pitchMax: shipData.pitchMax,
        yawMax: shipData.yawMax,
        rollMax: shipData.rollMax,
        xaxisAcceleration: shipData.xaxisAcceleration,
        yaxisAcceleration: shipData.yaxisAcceleration,
        zaxisAcceleration: shipData.zaxisAcceleration,
        size: shipData.size,
        sizeLabel: shipData.sizeLabel,
        holoColored: shipData.holoColored,
        storeUrl: shipData.storeUrl,
        salesPageUrl: shipData.salesPageUrl,
        price: shipData.price,
        pledgePrice: shipData.pledgePrice,
        onSale: shipData.onSale,
        productionStatus: shipData.productionStatus,
        productionNote: shipData.productionNote,
        classification: shipData.classification,
        classificationLabel: shipData.classificationLabel,
        focus: shipData.focus,
        rsiId: shipData.rsiId,
        hasModules: shipData.hasModules,
        hasUpgrades: shipData.hasUpgrades,
        hasPaints: shipData.hasPaints,
        soldAt: soldAt,
        boughtAt: boughtAt,
        listedAt: listedAt,
        rentalAt: rentalAt,
        manufacturer: manufacturer,
        loaners,
        hardpoints,
        modules,
        paints,
        variants,
      }
      ships.push(ship)
    })
  )

  return ships
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

  object.soldAt.forEach((obj, i) => {
    soldAt.push({
      name: obj.name,
      slug: obj.slug,
      category: obj.category,
      subCategory: obj.subCategory,
      subCategoryLabel: obj.subCategoryLabel,
      pricePerUnit: obj.pricePerUnit,
      sellPrice: obj.sellPrice,
      averageSellPrice: obj.averageSellPrice,
      buyPrice: obj.buyPrice,
      averageBuyPrice: obj.averageBuyPrice,
      rentalPrice1Day: obj.rentalPrice1Day,
      averageRentalPrice1Day: obj.averageRentalPrice1Day,
      rentalPrice3Days: obj.rentalPrice3Days,
      averageRentalPrice3Days: obj.averageRentalPrice3Days,
      rentalPrice7Days: obj.rentalPrice7Days,
      averageRentalPrice7Days: obj.averageRentalPrice7Days,
      rentalPrice30Days: obj.rentalPrice30Days,
      averageRentalPrice30Days: obj.averageRentalPrice30Days,
      confirmed: obj.confirmed,
      commodityItemType: obj.commodityItemType,
      commodityItemId: obj.commodityItemId,
      shop: obj.shop.id,
    })
  })

  object.boughtAt.forEach((obj, i) => {
    boughtAt.push({
      name: obj.name,
      slug: obj.slug,
      category: obj.category,
      subCategory: obj.subCategory,
      subCategoryLabel: obj.subCategoryLabel,
      pricePerUnit: obj.pricePerUnit,
      sellPrice: obj.sellPrice,
      averageSellPrice: obj.averageSellPrice,
      buyPrice: obj.buyPrice,
      averageBuyPrice: obj.averageBuyPrice,
      rentalPrice1Day: obj.rentalPrice1Day,
      averageRentalPrice1Day: obj.averageRentalPrice1Day,
      rentalPrice3Days: obj.rentalPrice3Days,
      averageRentalPrice3Days: obj.averageRentalPrice3Days,
      rentalPrice7Days: obj.rentalPrice7Days,
      averageRentalPrice7Days: obj.averageRentalPrice7Days,
      rentalPrice30Days: obj.rentalPrice30Days,
      averageRentalPrice30Days: obj.averageRentalPrice30Days,
      confirmed: obj.confirmed,
      commodityItemType: obj.commodityItemType,
      commodityItemId: obj.commodityItemId,
      shop: obj.shop.id,
    })
  })

  object.listedAt.forEach((obj, i) => {
    listedAt.push({
      name: obj.name,
      slug: obj.slug,
      category: obj.category,
      subCategory: obj.subCategory,
      subCategoryLabel: obj.subCategoryLabel,
      pricePerUnit: obj.pricePerUnit,
      sellPrice: obj.sellPrice,
      averageSellPrice: obj.averageSellPrice,
      buyPrice: obj.buyPrice,
      averageBuyPrice: obj.averageBuyPrice,
      rentalPrice1Day: obj.rentalPrice1Day,
      averageRentalPrice1Day: obj.averageRentalPrice1Day,
      rentalPrice3Days: obj.rentalPrice3Days,
      averageRentalPrice3Days: obj.averageRentalPrice3Days,
      rentalPrice7Days: obj.rentalPrice7Days,
      averageRentalPrice7Days: obj.averageRentalPrice7Days,
      rentalPrice30Days: obj.rentalPrice30Days,
      averageRentalPrice30Days: obj.averageRentalPrice30Days,
      confirmed: obj.confirmed,
      commodityItemType: obj.commodityItemType,
      commodityItemId: obj.commodityItemId,
      shop: obj.shop.id,
    })
  })

  object.rentalAt.forEach((obj, i) => {
    rentalAt.push({
      name: obj.name,
      slug: obj.slug,
      category: obj.category,
      subCategory: obj.subCategory,
      subCategoryLabel: obj.subCategoryLabel,
      pricePerUnit: obj.pricePerUnit,
      sellPrice: obj.sellPrice,
      averageSellPrice: obj.averageSellPrice,
      buyPrice: obj.buyPrice,
      averageBuyPrice: obj.averageBuyPrice,
      rentalPrice1Day: obj.rentalPrice1Day,
      averageRentalPrice1Day: obj.averageRentalPrice1Day,
      rentalPrice3Days: obj.rentalPrice3Days,
      averageRentalPrice3Days: obj.averageRentalPrice3Days,
      rentalPrice7Days: obj.rentalPrice7Days,
      averageRentalPrice7Days: obj.averageRentalPrice7Days,
      rentalPrice30Days: obj.rentalPrice30Days,
      averageRentalPrice30Days: obj.averageRentalPrice30Days,
      confirmed: obj.confirmed,
      commodityItemType: obj.commodityItemType,
      commodityItemId: obj.commodityItemId,
      shop: obj.shop.id,
    })
  })

  object.loaners.forEach((obj, i) => {
    loaners.push({
      name: obj.name,
      slug: obj.slug,
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
    apiid: object.id,
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
  // const Datastore = await postSCData()
  const Datastore = await formData()

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr&limit=-1'
      )
      .then((resp) => {
        Datastore.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find(
            (element) => element.apiid == object.apiid
          )
          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {})
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ships?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
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
