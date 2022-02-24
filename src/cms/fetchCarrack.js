import { Directus } from '@directus/sdk'

const directus = new Directus('https://cms.ariscorp.de')

directus.auth.static('ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr')

const carrack = directus.items('ships')

export default async function fetchCarrack() {
  // await carrack.createOne({
  //   name: data.ship.data.Name,
  //   dd: data.ship.data.Description,
  // })

  await carrack.createMany([
    {
      status: 'published',
      model: 'test model',
      _slug: 'test-model',
      description: '<h1>cool title</h1>',
      size: {
        id: '4871eb23-ae79-49df-bda1-bc995e7b7f59',
      },
      classification: {
        id: '0807de16-803c-41c7-8f25-4a14e35ff18c',
      },
      role: {
        id: 'faeeb4f6-259d-45d9-8123-4cb047690185',
      },
      cargo: 96,
      crew: 5,
      weapon_crew: 6,
      operations_crew: 9,
      mass: 86129.1,
      isspaceship: true,
      nose: 11,
      body: 10,
      pilot_hardpoints: [
        {
          size: 5,
          fixed: true,
          weapon_sizes: [
            {
              size: 1,
            },
          ],
        },
      ],
      manned_turrets: [
        {
          size: 5,
          turret: true,
          weapon_sizes: [
            {
              size: 12,
            },
          ],
        },
      ],
      remote_turrets: [
        {
          size: 5,
          gimballed: true,
          weapon_sizes: [
            {
              size: 123,
            },
          ],
        },
      ],
    },
  ])
}
