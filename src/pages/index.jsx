import Head from "next/head";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import OrgaSection from "components/OrgaSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - Homepage
        </title>
      </Head>

      <Navbar />
      <HeroSection />

      <div className="px-4 md:container md:mx-auto">
        <AboutSection />
        <OrgaSection />
      </div>
    </>
  );
}
