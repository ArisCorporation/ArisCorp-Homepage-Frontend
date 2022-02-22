import Layout from './layout'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'

const GET_SHIPS = gql`
  query getShips {
    ships @rest(path: "ships") {
      data {
        Name
        Description
        Size
        Manufacturer {
          Name
        }
        RemoteTurrets {
          Gimballed
        }
      }
    }
  }
`

export default function VerseExkursIndex() {
  const { loading, error, data } = useQuery(GET_SHIPS)

  if (loading)
    return <div className="flex justify-center pt-32">loading...</div>

  if (error) return <p>Error :(</p>

  return (
    <div className="[overflow-x:scroll!important]">
      <h1 className="text-center scale-50 md:scale-75 lg:scale-100">
        Das ist ein sehr kleiner Einblick in die Daten die, die ArisCorp für den
        ShipExkurs zur verfügung stehen
      </h1>
      <h5 className="mt-3 text-center">
        Für ein paar mehr Daten können sie einfach nach einem Schiff suchen in
        dem sie diese url eingeben:
        <p className='pt-1 opacity-80'>{'"'}https://ptu.ariscorp.de/ShipExkurs/{'['}
        hersteller-code (bspw. anvl für Anvil){']'}_{'['}ship-model (bspw.
        carrack){']'}{'"'}</p>
        Fertiger link:{' '}
        <Link href="/ShipExkurs/anvl_carrack">
          <a className="text-secondary"> https://ptu.ariscorp.de/ShipExkurs/anvl_carrack</a>
        </Link>
      </h5>
      <p className="mt-3 text-sm italic text-center scale-90 opacity-70">
        * Hinweis: für seitliches scrollen halten sie Umschalt/Shift gedrückt und drehen
        sie ihr Mausrad *
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
