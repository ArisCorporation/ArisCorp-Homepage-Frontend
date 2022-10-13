const axios = require('axios')

const url = 'https://api.fleetyards.net/v1/shops'

const flpage = 1
const Datastore = { data: [] }

async function getShops() {
  do {
    const response = await fetch(url + '?page=' + flpage + '&perPage=100')
    const data = await response.json()

    Datastore.data.push(data)
    ++flpage
  } while (
    (await axios.get(
      'https://api.fleetyards.net/v1/shops' + '?page=' + flpage + '&perPage=100'
    ).data) != null
  )
}

export default async function handler(req, res) {
  await getShops()

  if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/shops?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr&limit=1200'
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
                `https://cms.ariscorp.de/items/shops/${search.id}?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
                object
              )
              .catch(function (error) {
                console.log(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/shops?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr`,
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
    res.status(200).json(Datastore)
  }
}
