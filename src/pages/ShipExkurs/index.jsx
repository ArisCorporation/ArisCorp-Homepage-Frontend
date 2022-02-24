import Layout from './layout'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import formatJson from 'cms/formatJson'
import fetchCarrack from 'cms/fetchCarrack'
import { Directus } from '@directus/sdk'

const directus = new Directus('https://cms.ariscorp.de')

directus.auth.static('ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr')

const ships = directus.items('ships')

const GET_SHIPS = gql`
  query getShips {
    ships @rest(path: "ships") {
      data {
        ClassName
        Name
        Description
        Size
        Career
        Role
        Cargo
        Crew
        WeaponCrew
        OperationsCrew
        Mass
        IsSpaceship
      }
    }
  }
`

export default function VerseExkursIndex() {
  const { loading, error, data } = useQuery(GET_SHIPS)

  if (loading)
    return <div className="flex justify-center pt-32">loading...</div>

  if (error) return <p>Error :(</p>

  async function test(data) {
    // Replace-Function
    function renameKey(obj, oldKey, newKey) {
      obj[newKey] = obj[oldKey]
      delete obj[oldKey]
    }
    // Replace Key: ClassName with Key: _slug
    const sData = JSON.parse(JSON.stringify(data))
    sData.ships.data.forEach((obj) => renameKey(obj, 'ClassName', '_slug'))

    // Replace Key: Name with Key: model
    sData.ships.data.forEach((obj) => renameKey(obj, 'Name', 'model'))

    // Replace Key: Description with Key: description
    sData.ships.data.forEach((obj) =>
      renameKey(obj, 'Description', 'description')
    )
    // Remove Quotes && Replace "\n" with "<br />"
    const shipjson = JSON.stringify(sData.ships.data)
    const shipdata = shipjson
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/\\n/g, '<br />')
      .replace('}{', '},{')

    const tetst = JSON.parse(shipjson.replace(/\\n/g, '<br />'))

    console.log(await ships.createMany(tetst))
  }

  return (
    <div className="[overflow-x:scroll!important]">
      <h1 className="text-center scale-50 md:scale-75 lg:scale-100">
        Das ist ein sehr kleiner Einblick in die Daten die, die ArisCorp für den
        ShipExkurs zur verfügung stehen
      </h1>
      <h5 className="mt-3 text-center">
        Für ein paar mehr Daten können sie einfach nach einem Schiff suchen in
        dem sie diese url eingeben:
        <p className="pt-1 opacity-80">
          {'"'}https://ptu.ariscorp.de/ShipExkurs/{'['}
          hersteller-code (bspw. anvl für Anvil){']'}_{'['}ship-model (bspw.
          carrack){']'}
          {'"'}
        </p>
        Fertiger link:{' '}
        <Link href="/ShipExkurs/anvl_carrack">
          <a className="text-secondary">
            {' '}
            https://ptu.ariscorp.de/ShipExkurs/anvl_carrack
          </a>
        </Link>
      </h5>
      <p className="mt-3 text-sm italic text-center scale-90 opacity-70">
        * Hinweis: für seitliches scrollen halten sie Umschalt/Shift gedrückt
        und drehen sie ihr Mausrad *
      </p>
      <button onClick={() => formatJson(data)}>test</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
