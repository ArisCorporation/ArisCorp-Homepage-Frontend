import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'
import ProtectedLayout from "./layout"
import { useSession } from 'next-auth/react'

export default function InternalIndex () {
  const { data: session } = useSession()
  console.log(session)
  return (
    <ProtectedLayout>
      <div>
        <h1>Servus im AMS</h1>
      </div>
    </ProtectedLayout>
  )
}
