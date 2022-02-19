import axios from 'axios'

export default async (req, res) => {
  const { ship } = req.query
  const url = `https://raw.githubusercontent.com/richardthombs/scunpacked/master/api/dist/json/v2/ships/${ship}.json`

  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
