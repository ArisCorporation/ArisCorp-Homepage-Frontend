import Head from "next/head";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import Member from "components/AboutSection";

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

      <div className="md:container md:mx-auto">
        servus
      </div>
    </>
  );
}
