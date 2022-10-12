const axios = require('axios')

// Replace with the appropriate url.
const url = 'https://api.fleetyards.net/v1/shops'

let flpage = 1
let datastore = {
  data: []
}
async function test() {
  do {
    const response = await fetch(url + '?page=' + flpage + '&perPage=100')
    const data = await response.json()

    datastore.data.push(data)
    ++flpage
  } while ((await axios.get('https://api.fleetyards.net/v1/shops' + '?page=' + flpage + '&perPage=100').data) != null)
}

export default async function handler(req, res) {
  await test()

  res.status(200).json(datastore)
}
