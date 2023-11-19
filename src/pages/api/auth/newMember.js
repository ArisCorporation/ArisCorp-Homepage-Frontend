const crypto = require('crypto').webcrypto;
import axios from 'axios'

const BackendURL = 'https://cms.ariscorp.de'

const generatePassword = (
  length = 12,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@-#'
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

async function getUsers() {
  const { data } = await axios.get(BackendURL + '/users?limit=-1')

  return data.data
}

async function userValidation(email) {
  const re = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  const emailValid = re.test(email.toLowerCase())

  if (!emailValid) {
    return {
      valid: false,
      code: 1,
      message: 'The Email must be valid!',
    }
  }

  const users = await getUsers()
  const emailUnique = users.find((e) => e.email == email)
  if (emailUnique) {
    return {
      valid: false,
      code: 2,
      message: 'Email already exists!',
    }
  }

  return true
}

async function createUser(name, role, customEmail) {
  const { firstname, lastname } = name
  const password = generatePassword()
  const email = customEmail
    ? customEmail
    : `${firstname.toLowerCase()}.${lastname.toLowerCase()}@ariscorp.de`
  const lang = 'de-DE'
  const avatar = '0b7eafde-0933-4d1a-a32f-b4f8dd5bb492'

  let validation = await userValidation(email)
  if (validation.valid == false) {
    return {
      status: 'ERROR',
      errorCode: validation.errorCode,
      errorMessage: validation.message,
    }
  }

  const payload = {
    first_name: firstname,
    last_name: lastname,
    email,
    password,
    avatar,
    lang,
    role,
    email_notifications: false,
  }

  const { data: user } = await axios.post(
    BackendURL + '/users?access_token=' + process.env.NEXT_PUBLIC_CMS_TOKEN,
    payload
  )
  const member = await createMember(name, user.data)

  return {
    userData: {
      email,
      password,
    },
    user: user.data,
    member: member.data,
  }
}

async function createMember(name, user) {
  const { firstname, lastname, title } = name
  const payload = {
    firstname,
    lastname,
    title,
    account: user.id,
  }

  const { data } = await axios.post(
    BackendURL + '/items/member?access_token=' + process.env.NEXT_PUBLIC_CMS_TOKEN,
    payload
  )

  return data
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send({ status: 'ok' })
  } else if (req.method === 'POST') {
    const body = req.body
    const name = {
      firstname: body.firstname,
      lastname: body.lastname,
      title: body.title,
    }
    const customEmail = body?.email
    const role = body.role
    const data = await createUser(name, role, customEmail)

    if (data.status == 'ERROR') {
      res.status(500).send(data)
    } else {
      res.status(200).send(data)
    }
  }
}
