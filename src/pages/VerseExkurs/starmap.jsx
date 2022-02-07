import Image from "next/image";
import Layout from "./layout";

export default function test() {
  return (
    <div className="">
      <div className="relative w-[1200px] h-[841px]">
        <div
          id="branaugh"
          className="relative z-10 w-[1.667%] h-[2.3789%] left-[27.77%] top-[8.28777%] group hover:cursor-pointer"
        >
          <div className="absolute w-full h-full transition duration-1000 rounded-full opacity-75 bg-gradient-to-r from-cyan-600 to-blue-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
          <div className="relative items-center w-full h-full leading-none divide-x divide-gray-600 rounded-full">
            <Image
              src={
                "https://cms.ariscorp.de/assets/ab6330a8-40b6-40fd-ab8f-fac1d11741a3"
              }
              layout="fill"
              placeholder="blur"
              blurDataURL="https://cms.ariscorp.de/assets/ab6330a8-40b6-40fd-ab8f-fac1d11741a3?width=16&quality=1"
              draggable="false"
            />
          </div>
        </div>

        <Image
          src={
            "https://cms.ariscorp.de/assets/26a5366b-8ac6-40f8-b8fe-af144c64165f"
          }
          layout="fill"
          placeholder="blur"
          blurDataURL="https://cms.ariscorp.de/assets/26a5366b-8ac6-40f8-b8fe-af144c64165f?width=16&quality=1"
          draggable="false"
        />
      </div>
    </div>
  );
}

test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
