import Footer from 'components/Footer'
import HeroSection from 'components/HomeHero'
import Navbar from 'components/HomeNavbar'
import Sidebar from 'components/VerseExkursSidebar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Navbar />

      {router.pathname == '/' ? <HeroSection /> : ''}

      <div className="min-h-screen px-4 md:container md:mx-auto">
        {children}
      </div>

      <Footer />
    </>
  )
}
