import axios from 'axios'

export default async function handler(req, res) {
  await axios.post(
    'https://ptu.ariscorp.de/api/ships/storeImages'
  )

  await new Promise(r => setTimeout(r, 10000));
  await axios.post(
    'https://ptu.ariscorp.de/api/ships/storeImages'
  )

  await new Promise(r => setTimeout(r, 10000));
  await axios.post(
    'https://ptu.ariscorp.de/api/ships/storeImages'
  )

  res.status(200).send({status: "ok"})
}
