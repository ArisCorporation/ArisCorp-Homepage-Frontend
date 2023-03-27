import axios from 'axios'

const SCWURL = 'https://api.star-citizen.wiki/api/'
const BackendURL = 'https://cms.ariscorp.de'

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
const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase())
const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
const s = 'MCMLXXXIX'
// s = 1989
function romanToInt(s) {
  let accumulator = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && s[i + 1] === 'V') {
      accumulator += 4
      i++
    } else if (s[i] === 'I' && s[i + 1] === 'X') {
      accumulator += 9
      i++
    } else if (s[i] === 'X' && s[i + 1] === 'L') {
      accumulator += 40
      i++
    } else if (s[i] === 'X' && s[i + 1] === 'C') {
      accumulator += 90
      i++
    } else if (s[i] === 'C' && s[i + 1] === 'D') {
      accumulator += 400
      i++
    } else if (s[i] === 'C' && s[i + 1] === 'M') {
      accumulator += 900
      i++
    } else {
      accumulator += romanHash[s[i]]
    }
  }
  return accumulator
}

async function sendBug(title, desc) {
  if (!title || !desc) {
    return
  }

  const bug = {
    name: title,
    description: `<p> ${desc} </p>`,
    typeOfWorkId: '4b21fdf6-bf0e-4db1-6756-08d8df08faff',
    taskStatusId: 'efa885e5-174c-ed11-ade6-cc60c8b6347d',
    order: 0,
    entityId: '005bb376-e97c-eb11-a607-00155d314496',
    baseType: 'projecttask',
    lists: [
      {
        id: '51310d1d-3e0f-ec11-b563-dc984023d47e',
        order: 0,
      },
    ],
  }

  const content = {
    meta: {
      assignees: ['3cdd29dc-4083-eb11-a607-00155d314496'],
      tags: [
        {
          name: 'VerseExkurs',
          color: 'blue',
        },
        {
          name: 'Content',
          color: 'green',
        },
        {
          name: 'Known-Issues',
          color: 'yellow',
        },
      ],
    },
    bug,
  }

  await axios.post('/api/awork/bugs/create', content).catch(function (error) {
    console.log(error.toJSON())
  })
  return
}

async function getLiveData() {
  let res = await axios.get(BackendURL + '/items/systeme?limit=-1')
  let data = res.data.data

  return data
}

async function getSCWSystems() {
  let res = await axios.get(
    SCWURL + 'starmap/starsystems?limit=0&include=celestial_objects,jumppoints'
  )
  let data = res.data.data

  return data
}

function getSubType(planet) {
  const types = [
    {
      text: 'Terrestrisch Fells',
      value: 'terrestrickRock',
      aliases: ['terrestrickRock', 'terrestrialRocky'],
    },
    {
      text: 'Super-Erde',
      value: 'superEarth',
    },
    {
      text: 'Super-Jupiter',
      value: 'superJupiter',
    },
    {
      text: 'Eisen-Planet',
      value: 'ironPlanet',
    },
    {
      text: 'Smog-Planet',
      value: 'smogPlanet',
    },
    {
      text: 'Wüsten-Planet',
      value: 'desertPlanet',
    },
    {
      text: 'Ozean-Planet',
      value: 'oceanPlanet',
    },
    {
      text: 'Lava-Planet',
      value: 'lavaPlanet',
    },
    {
      text: 'Mesoplanet',
      value: 'mesoplanet',
    },
    {
      text: 'Protoplanet',
      value: 'protoplanet',
    },
    {
      text: 'Zwerg-Planet',
      value: 'dwarfPlanet',
    },
    {
      text: 'Gasrieße',
      value: 'gasGiant',
    },
    {
      text: 'Gaszwerg',
      value: 'gasDwarf',
    },
    {
      text: 'Eisrieße',
      value: 'iceGiant',
    },
    {
      text: 'Eis-Planet',
      value: 'icePlanet',
    },
    {
      text: 'Planetoid',
      value: 'planetoid',
    },
    {
      text: 'Planetarer Mond',
      value: 'planetaryMoon',
    },
    {
      text: 'Kernloser Planet',
      value: 'corelessPlanet',
    },
    {
      text: 'Künstlich',
      value: 'artificial',
    },
    {
      text: 'Geschwollener Planet',
      value: 'puffyPlanet',
    },
    {
      text: 'Kohlenstoff-Planet',
      value: 'carbonPlanet',
    },
    {
      text: 'Chthonischer Planet',
      value: 'chthonianPlanet',
    },
    {
      text: 'Schurkenplanet',
      value: 'roguePlanet',
    },
  ]

  const type = types.find(
    (e) =>
      (e.aliases &&
        e.aliases.includes(camelize(slugify(planet.subtype.data.name)))) ||
      e.value == camelize(slugify(planet.subtype.data.name))
  )

  return type?.value
}

async function postPlanets(planets) {
  const planetIds = []
  const planetObjects = []

  await axios
    .get(
      'https://cms.ariscorp.de/items/planets?limit=-1&access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg'
    )
    .then((resp) => {
      planets.forEach((object, index) => {
        const directusData = resp.data.data
        const search = directusData.find(
          (element) =>
            element.astronomicalDesignation == object.astronomicalDesignation
        )
        if (search != null) {
          axios.patch(
            `https://cms.ariscorp.de/items/planets/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
            object
          )
          planetIds.push(search.id)
          planetObjects.push({ ...object, id: search.id })
        } else {
          axios
            .post(
              `https://cms.ariscorp.de/items/planets?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
              object
            )
            .then((resp) => {
              planetIds.push(resp.data.data.id)
              planetIds.push(resp.data.data)
            })
        }
      })
    })

  return {
    planetIds,
    planetObjects,
  }
}

async function getPlanets(data, systemId) {
  const planets = []

  data.celestial_objects.data
    .filter((e) => e.type == 'PLANET')
    .map((obj) => {
      const type = getSubType(obj)
      const slug = obj.name && slugify(obj.name)

      const planet = {
        status: 'published',
        name: obj.name,
        astronomicalDesignation: obj.designation,
        slug: slug,
        size: obj.size,
        age: obj.age,
        orbitalPeriod: obj.orbit_period,
        distance: obj.distance,
        type,
        habitable: obj.habitable ? true : false,
        fairchanceact: obj.fairchanceact ? true : false,
        population: obj.sensor.population,
        economy: obj.sensor.economy,
        danger_level: obj.sensor.danger,
        starSystem: systemId,
      }

      planets.push(planet)
    })

  const postPlanetData = await postPlanets(planets)
  return {
    planetIds: postPlanetData.planetIds,
    planets: postPlanetData.planetObjects,
  }
}

async function postMoons(moons) {
  const moonIds = []
  const moonObjects = []

  await axios
    .get(
      'https://cms.ariscorp.de/items/moons?limit=-1&access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg'
    )
    .then((resp) => {
      moons.forEach((object, index) => {
        const directusData = resp.data.data
        const search = directusData.find(
          (element) =>
            element.astronomicalDesignation == object.astronomicalDesignation
        )
        if (search != null) {
          axios.patch(
            `https://cms.ariscorp.de/items/moons/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
            object
          )
          moonIds.push(search.id)
          moonObjects.push({ ...object, id: search.id })
        } else {
          axios
            .post(
              `https://cms.ariscorp.de/items/moons?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
              object
            )
            .then((resp) => {
              moonIds.push(resp.data.data.id)
              moonIds.push(resp.data.data)
            })
        }
      })
    })

  return {
    moonIds,
    moonObjects,
  }
}

async function getMoons(planets, system) {
  const moons = []

  planets.planets.forEach(async (planet) => {
    if (!planet.astronomicalDesignation) {
      return
    }

    const romanNumeral = await planet.astronomicalDesignation
      .split(' ')[1]
      ?.toString()

    if (romanNumeral == null) {
      console.log(planet.astronomicalDesignation)
      await sendBug(
        planet.astronomicalDesignation +
          ' - monde können nicht automatisch erstellt werden',
        `Die Monde von ${planet.astronomicalDesignation} können nicht automatisch erstellt werden, da es ein Problem mit der API gibt.`
      )
      return
    }
    const numeral = await romanToInt(romanNumeral)
    const planetDesignationNumeric = system.name + ' ' + numeral

    system.celestial_objects.data
      .filter((e) => e.type == 'SATELLITE')
      .forEach((obj) => {
        if (!obj.designation.startsWith(planetDesignationNumeric)) {
          return
        }
        const slug = obj.name && slugify(obj.name)
        const astronomicalSlug = slugify(obj.designation)

        const moon = {
          status: 'published',
          name: obj.name,
          astronomicalDesignation: obj.designation,
          slug,
          astronomicalSlug,
          size: obj.size,
          age: obj.age,
          orbitalPeriod: obj.orbit_period,
          distance: obj.distance,
          habitable: obj.habitable ? true : false,
          fairchanceact: obj.fairchanceact ? true : false,
          population: obj.sensor.population,
          economy: obj.sensor.economy,
          danger_level: obj.sensor.danger,
          planet: planet.id,
        }

        moons.push(moon)
      })
  })

  const postMoonData = await postMoons(moons)
  return {
    moonIds: postMoonData.moonIds,
    moons: postMoonData.moonObjects,
  }
}

async function formData() {
  const rawData = await getSCWSystems()
  const liveData = await getLiveData()
  const systems = []
  const plannedPlanets = []
  const actualPlanets = []
  const plannedMoons = []
  const actualMoons = []

  await Promise.all(
    rawData.map(async (obj, i) => {
      const liveSystem = liveData.find(
        (e) =>
          e.name.toLowerCase() == obj.name.toLowerCase() ||
          e.name.toLowerCase() == obj.code.toLowerCase() ||
          slugify(e.name) == slugify(obj.name) ||
          slugify(e.name) == slugify(obj.code)
      )

      if (!liveSystem) {
        return
      }
      // Planets
      const planets = await getPlanets(obj, liveSystem.id)
      plannedPlanets.push(
        ...obj.celestial_objects.data.filter((e) => e.type == 'PLANET')
      )
      actualPlanets.push(...planets.planets)
      // Moons
      const moons = await getMoons(planets, obj)
      plannedMoons.push(
        ...obj.celestial_objects.data.filter((e) => e.type == 'SATELLITE')
      )
      if (moons) {
        actualMoons.push(...moons.moons)
      }
      // const stations = await getSystems()

      const system = {
        id: liveSystem.id,
        scwId: obj.id,
        status: 'published',
        name: liveSystem.name,
      }

      return systems.push(system)
    })
  )

  const response = {
    meta: {
      dataCheck: {
        planets: {
          plannedPlanets: plannedPlanets.length,
          actualPlanets: actualPlanets.length,
        },
        moons: {
          plannedMoons: plannedMoons.length,
          actualMoons: actualMoons.length,
        },
      },
    },
    data: systems,
    planets: actualPlanets,
    moons: actualMoons,
  }

  return response
}

export default async function handler(req, res) {
  const Datastore = await formData()

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    await axios
      .get(
        'https://cms.ariscorp.de/items/systeme?limit=-1&access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg'
      )
      .then((resp) => {
        Datastore.data.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find((element) => element.id == object.id)
          if (search) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/systeme/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
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
