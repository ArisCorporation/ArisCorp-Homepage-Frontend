import Head from "next/head";
import Navbar from "components/Navbar";

export default function Home() {
  return (
    <div className="flex bg-secondary">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>ArisCorp - Homepage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </div>
  );
}
