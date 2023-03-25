import axios from 'axios'

const SMURL = 'https://robertsspaceindustries.com/ship-matrix/index'
const BackendURL = 'https://cms.ariscorp.de'

import { Directus } from '@directus/sdk'

const directus = new Directus(BackendURL)

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

async function getDirectusFiles() {
  let res = await axios.get(BackendURL + '/files?limit=-1')
  let data = res.data.data

  return data
}

async function uploadFile(url, title) {
  const folder = '067e2715-7947-44db-971b-754760f8b0b1'

  const fullTitle = 'storeimage-' + title

  let payload = {
    url: url,
    data: {
      title: fullTitle,
      folder: folder,
    },
  }

  // const {data} = await axios.post(BackendURL + '/files/import?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg', payload)

  await directus.auth.static('te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg')
  const data = await directus.files.import({
    url: payload.url,
    data: payload.data,
  })

  // return await data.data
  return await data
}

async function getSMData() {
  const actualUrl = SMURL
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getLiveShipData() {
  const actualUrl =
    BackendURL +
    '/items/ships?fields=id,slug,name,storeImage&sort=name&limit=-1'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getFileId(obj, backendFiles, SMData) {
  const link = !SMData.media[0].source_url.includes('https')
    ? 'https://robertsspaceindustries.com' +
      SMData.media[0].source_url.replace('/', '/')
    : SMData.media[0].source_url.replace('/', '/')

  if (backendFiles.find((e) => e.title == 'storeimage-' + obj.slug)) {
    const file = await backendFiles.find(
      (e) => e.title == 'storeimage-' + obj.slug
    )
    return file.id
  } else {
    const file = await uploadFile(link, obj.slug)
    return file.id
  }
}

async function formData() {
  const rawShipMatrixData = await getSMData()
  const liveShipData = await getLiveShipData()
  const backendFiles = await getDirectusFiles()
  const ships = []

  await Promise.all(
    liveShipData.map(async (obj) => {
      let name = obj.name
      if (obj.name == 'Mercury Star Runner') {
        name = 'Mercury'
      }
      const SMData = rawShipMatrixData.find((e) => e.name == name)
      if (obj.storeImage || !SMData) {
        return
      }

      const fileId = await getFileId(obj, backendFiles, SMData)

      const ship = {
        id: obj.id,
        slug: obj.slug,
        storeImage: fileId,
      }

      ships.push(ship)
    })
  )

  return ships
}

export default async function handler(req, res) {
  const Datastore = await formData()

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/ships?fields=id,slug,name,storeImage&limit=-1'
      )
      .then((resp) => {
        Datastore.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find((element) => element.id == object.id)
          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
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
