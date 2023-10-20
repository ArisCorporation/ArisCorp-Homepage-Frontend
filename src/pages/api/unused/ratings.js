import axios from 'axios'

const SMURL = 'https://robertsspaceindustries.com/ship-matrix/index'
const FLURL = 'https://api.fleetyards.net/v1/models/'
const SCWURL = 'https://api.star-citizen.wiki/api/'
const BackendURL = 'https://cms.ariscorp.de'
const P4kURL =
  'https://raw.githubusercontent.com/ArisCorporation/p4k/main/latest/json/'
import { Directus } from '@directus/sdk'
const directus = new Directus(BackendURL)

async function getShips() {
  await directus.auth.static('te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg')

  const ships = directus.items('ships')

  const data = await ships.readByQuery({
    limit: -1,
    fields: ['id, slug, name, s_w, ratings, introduction'],
  })

  return data.data
}

async function formData() {
  const ships = await getShips()
  const ratings = []

  ships.map((obj) => {
    if (!obj.introduction) {
      return
    }

    const ship = {
      create: [],
      update: [
        {
          rating: '+',
          id: obj.id,
        },
      ],
      delete: [],
    }

    const object = {
      status: 'published',
      user_created: '54ee43a5-d877-4c11-aa61-31b1fea7d1a7',
      baseShip: obj.name,
      ships: ship,
      introduction: obj.introduction,
      ratings: obj.ratings,
      s_w: obj.s_w,
    }

    ratings.push(object)
  })

  return ratings
}

export default async function handler(req, res) {
  const Datastore = await formData()

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    Datastore.map((obj) => {
      axios
        .post(
          `https://cms.ariscorp.de/items/ariscorpRatings?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
          obj
        )
        .catch(function (error) {
          res.status(401).send(error)
        })
    })
    res.status(200).send(Datastore)
  } else if (req.method === 'PATCH') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/ariscorpRatings?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg&limit=-1'
      )
      .then((resp) => {
        Datastore.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find(
            (element) => element.baseShip == object.baseShip
          )
          if (search != null) {
            delete object.ships
            axios
              .patch(
                `https://cms.ariscorp.de/items/ariscorpRatings/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
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
