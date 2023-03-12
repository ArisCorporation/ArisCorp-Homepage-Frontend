export default async function handler(req, res) {
  const Datastore = await formData()

  if (req.method === 'GET') {
    await axios.get(
      'https://ptu.ariscorp.de/api/ships/storeImages'
    )
    await axios.get(
      'https://ptu.ariscorp.de/api/ships/storeImages'
    )
  } else if (req.method === 'POST') {
    await axios.post(
      'https://ptu.ariscorp.de/api/ships/storeImages'
    )
    await axios.post(
      'https://ptu.ariscorp.de/api/ships/storeImages'
    )
  }
}
