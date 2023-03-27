import axios from 'axios'

async function sendBug(content) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiI5MDA0ZDYzOS1lOTdjLWViMTEtYTYwNy0wMDE1NWQzMTQ0OTYiLCJpaWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJ1aWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJuYW1lIjoiYnVnLXJlcG9ydCIsImF6cCI6ImJ1Zy1yZXBvcnQiLCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIiwicnRpZCI6IjQ3NWVkNmM0LTE0NGMtZWQxMS1hZGU2LWNjNjBjOGI2MzQ3ZCIsIm5iZiI6MTY2NTc4ODc2MiwiZXhwIjo0Nzg5OTI2MzYyLCJpc3MiOiJodHRwczovL2F3b3JrLmlvLyIsImF1ZCI6ImF3LWFjY291bnRzIn0.7OyiskCz7ZCE9GyRN7kDBe3cepMoIQVYZSEArdVrnRQ',
  }

  await axios
    .post(`https://api.awork.io/api/v1/tasks`, content.bug, {
      headers: headers,
    })
    .then((resp) => {
      let tid = resp.data.id
      axios
        .post(
          `https://api.awork.io/api/v1/tasks/${tid}/addtags`,
          content.meta.tags,
          {
            headers: headers,
          }
        )
        .catch(function (error) {})
      axios
        .post(
          `https://api.awork.io/api/v1/tasks/${tid}/setassignees`,
          content.meta.assignees,
          {
            headers: headers,
          }
        )
        .catch(function (error) {})
    })
    .catch(function (error) {})
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await sendBug(req.body)
    res.status(200).send(data)
  } else {
    res.status(500).send({ status: 'INTERNAL ERROR' })
  }
}
