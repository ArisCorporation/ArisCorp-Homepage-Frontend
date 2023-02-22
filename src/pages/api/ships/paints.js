import axios from 'axios'

const FLURL = 'https://api.fleetyards.net/v1/models/'
const BackendURL = 'https://cms.ariscorp.de'
import { Directus } from '@directus/sdk'

const directus = new Directus(BackendURL)

async function getDirectusFiles() {
  let res = await axios.get(BackendURL + '/files?limit=-1')
  let data = res.data.data

  return data
}

async function uploadFile(url, title, fileType) {
  var folder

  if (fileType == 'brochure') {
    folder = 'a4100209-e7a7-46a1-a6c3-0272303a1a0a'
  } else if (fileType == 'holo') {
    folder = '7dd5f1c3-9a08-4477-811a-2a932b9e1c98'
  } else if (fileType == 'shipImage') {
    folder = '95c311dc-4ffb-4e48-b41a-bb959399eddc'
  } else if (fileType == 'paint') {
    folder = '7150758a-09d0-465e-aaf8-fb1f2a417715'
  }

  const fullTitle = fileType + '-' + title

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

  await directus.auth.static('te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg')
  const data = await directus.files.import({
    url: payload.url,
    data: payload.data,
  })

  return data
}

async function getFlPaints(ship) {
  const actualUrl = FLURL + ship + '/paints'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getLiveShipData() {
  const actualUrl = BackendURL + '/items/ships?fields=id,name,slug,flSlug'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function formData() {
  const liveShipData = await getLiveShipData()
  const ships = []

  await Promise.all(
    liveShipData.map(async (obj) => {
      const flPaints = await getFlPaints(obj.flSlug)
      const backendFiles = await getDirectusFiles()

      const paints = []
      if (flPaints[0]) {
        await Promise.all(
          await flPaints?.map(async (i) => {
            const fileName = obj.slug + '-' + i.slug
            const link = i.storeImage
            let storeImage

            if (backendFiles.find((e) => e.title == 'paint-' + fileName)) {
              storeImage = backendFiles.find(
                (e) => e.title == 'paint-' + fileName
              ).id
            } else {
              const fileUpload = await uploadFile(link, fileName, 'paint')
              storeImage = fileUpload.id
            }

            const paint = {
              name: i.name,
              slug: i.slug,
              nameWithModel: i.nameWithModel,
              storeImage,
            }

            paints.push(paint)
          })
        )
      }

      const ship = {
        slug: obj.slug,
        paints,
      }

      ships.push(ship)
    })
  )

  return ships
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
        'https://cms.ariscorp.de/items/ships?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg&limit=-1'
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
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
                object
              )
              .catch(function (error) {
                res.status(401).send(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ships?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
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
