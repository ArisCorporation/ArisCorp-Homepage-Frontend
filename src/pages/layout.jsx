import Sidebar from "components/VerseExkursSidebar";
import Navbar from "components/HomeNavbar";
import Footer from "components/Footer";
import HeroSection from "components/HomeHero";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  const router = useRouter()

  return (
    <>
      {
        router. == "/VerseExkurs" ? <Sidebar /> : <Navbar />
      }
      
      { router.pathname == "/" ? <HeroSection /> : ''}
      
      <main className="px-4 md:container md:mx-auto">{children}</main>
      
      <Footer />
    </>
  );
}
