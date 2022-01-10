import Head from "next/head";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";

export default function Home() {
  return (
    <div className="max-w-full bg-gray-900">
      <Head>
        <title>
          Astro Research and Industrial Service Corporation - Homepage
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <div className="">
        servus
      </div>
    </div>
  );
}
