import Image from "next/image";
import Link from "next/link";

const CommLinksSection = () => {
  return (
    <div className="flex flex-wrap justify-center my-12">
      <ThreeThirds />

      <OneThird />
      <TwoThirds />

      <OneThird />
      <OneThird />
      <OneThird />

      <TwoThirds />
      <OneThird />
      
      <OneThird />
      <TwoThirds />
    </div>
  );
};

const OneThird = () => {
  return (
    <Link href="/">
      <a className="mt-10 mr-[30px] w-[338px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer">
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/channel/hub-type-bg.png')] bg-no-repeat">
          <div className="bg-[url('https://robertsspaceindustries.com/rsi/static/images/atom/type-post.png')] float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px] "></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            post
          </span>
        </div>
        <div className="bg-cover relative bg-center opacity-60 w-[338px] h-[210px] bg-[url('https://robertsspaceindustries.com/media/j8m35gtauk86jr/channel_item_full/TWISC-JT.jpg')]"></div>
        <div className="block align-middle absolute mt-[26px] w-full">
          <div className="text-lg text-white ">
            This Week in Star Citizen - January 10, 2022
          </div>
        </div>
        <div className="absolute w-[338px] h-[90px] mt-[10px]">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d] absolute right-0">
            Channel:{" "}
            <span className="font-normal text-primary">Monthly Report</span>
          </div>
          <div className="absolute mt-20 text-[#5e7a8d] text-[11px] font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">1 day ago</span>
          </div>
        </div>
        <div className="w-[338px] h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/bg-med-lines.png')] absolute overflow-hidden z-10 top-[10px]">
          <div className="px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-xs table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              Inspired by historic, player-driven events on the icy moon of
              Yela, the next Dynamic Event in the ‘verse, Jumptown 2.0, is about
              to kick off in Star Citizen Alpha 3.16.
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
const TwoThirds = () => {
  return (
    <Link href="/">
      <a className="mt-10 mr-[30px] w-[729px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer">
        <div className="bg-cover absolute bg-center opacity-60 w-[729px] h-[315px] bg-[url('https://robertsspaceindustries.com/media/j8m35gtauk86jr/channel_item_full/TWISC-JT.jpg')]"></div>
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/channel/hub-type-bg.png')] bg-no-repeat">
          <div className="bg-[url('https://robertsspaceindustries.com/rsi/static/images/atom/type-post.png')] float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px] "></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            post
          </span>
        </div>
        <div className=" table-cell align-middle relative w-[729px] h-[315px]">
          <div className="w-[729px] text-white text-6xl uppercase text-center">
            This Week in Star Citizen - January 10, 2022
          </div>
        </div>
        <div className="bg-black bg-repeat bg-opacity-80 p-[20px] h-[10px] w-[689px] absolute text-xs mt-[-50px] box-content">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d]">
            Channel:{" "}
            <span className="font-normal text-primary">Monthly Report</span>
          </div>
          <div className="text-[#5e7a8d] font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">1 day ago</span>
          </div>
        </div>
        <div className="w-[729px] h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/bg-med-lines.png')] absolute overflow-hidden z-10 top-[10px]">
          <div className="w-[669px] px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-md table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              Inspired by historic, player-driven events on the icy moon of
              Yela, the next Dynamic Event in the ‘verse, Jumptown 2.0, is about
              to kick off in Star Citizen Alpha 3.16.
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
const ThreeThirds = () => {
  return (
    <Link href="/">
      <a className="mt-10 mr-[30px] w-[1119px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer">
        <div className="bg-cover absolute bg-center opacity-60 w-[1119px] h-[315px] bg-[url('https://robertsspaceindustries.com/media/j8m35gtauk86jr/channel_item_full/TWISC-JT.jpg')]"></div>
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/channel/hub-type-bg.png')] bg-no-repeat">
          <div className="bg-[url('https://robertsspaceindustries.com/rsi/static/images/atom/type-post.png')] float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px] "></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            post
          </span>
        </div>
        <div className="table-cell align-middle relative w-[1119px] h-[315px]">
          <div className="w-[1119px] text-white text-6xl uppercase text-center">
            This Week in Star Citizen - January 10, 2022
          </div>
        </div>
        <div className="bg-black bg-repeat bg-opacity-80 p-[20px] h-[10px] w-[1079px] absolute text-xs mt-[-50px] box-content">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d]">
            Channel:{" "}
            <span className="font-normal text-primary">Monthly Report</span>
          </div>
          <div className="text-[#5e7a8d] font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">1 day ago</span>
          </div>
        </div>
        <div className="w-[1119px] h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-[url('https://robertsspaceindustries.com/rsi/static/images/bg-med-lines.png')] absolute overflow-hidden z-10 top-[10px]">
          <div className="w-[1059px] px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-md table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              Inspired by historic, player-driven events on the icy moon of
              Yela, the next Dynamic Event in the ‘verse, Jumptown 2.0, is about
              to kick off in Star Citizen Alpha 3.16.
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CommLinksSection;
