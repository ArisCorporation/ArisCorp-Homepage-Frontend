import Layout from './layout'
import { LocalApiClient } from 'apollo/clients'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const GET_SHIPS = gql`
  query getShips($shipRoute: String!) {
    ship @rest(path: $shipRoute) {
      data {
        ClassName
        Name
        Description
        Carrer
        Role
        Size
        Cargo
        Crew
        WeaponCrew
        OperationsCrew
        Mass
        IsSpaceship
        Manufacturer {
          Code
          Name
        }
        MannedTurrets {
          Size
          Turret
          WeaponSizes
        }
        RemoteTurrets {
          Size
          Gimballed
          WeaponSize
        }
        Insurance {
          StandardClaimTime
          ExpeditedClaimTime
          ExpeditedCost
        }
      }
    }
  }
`

export default function VerseExkursIndex() {
  const router = useRouter()
  const { ship } = router.query

  const shipRoute = 'ships/' + ship

  const { loading, error, data } = useQuery(GET_SHIPS, {
    variables: { shipRoute },
  })

  if (loading)
    return <div className="flex justify-center pt-32">loading...</div>

  if (error) return <p>Error :(</p>

  return (
    <>
      <h1 className="text-center">
        Das ist ein kleiner Einblick in die Daten die, die ArisCorp für den
        ShipExkurs zur verfügung stehen
      </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
