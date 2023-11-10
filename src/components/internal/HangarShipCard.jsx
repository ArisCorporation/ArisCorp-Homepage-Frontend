import { BasicPanel } from "components/panels"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, useInView, motion } from "framer-motion";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';

const imageVariants = {
  normal: { borderRadius: "16px 16px 16px 16px" },
  detail: { borderRadius: "16px 16px 0px 0px" },
}
const detailViewVariants = {
  normal: { height: '0px' },
  detail: { height: '200px' },
}

const HangarShipDetailCard = ({ data, detailView, editAction, removeAction, fleetView }) => {
  return (
    <BasicPanel>
      <div className='absolute z-50 flex bottom-1 right-1'>
        {editAction && (
          <div onClick={editAction} className='flex items-center justify-center w-10 h-10 transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 hover:duration-300'>
            <MdOutlineModeEditOutline className='w-5 h-5' />
          </div>
        )}
        {removeAction && (
          <div onClick={removeAction} className='flex items-center justify-center w-10 transition-all duration-200 opacity-50 cursor-pointer h-100 hover:opacity-100 hover:text-red-500 hover:duration-300'>
            <BsTrash className='w-5 h-5' />
          </div>
        )}
      </div>
      <div className="h-[200px] relative transition-all duration-500 ease ">
        <div className='absolute z-[15] right-2 top-2 h-16 w-16 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.custom_data?.department?.gameplay_logo?.id || data.custom_data?.department?.gameplay_logo}?height=400)` }} />
        {fleetView && (
          <Link legacyBehavior href={"/biografie/" + data.member.slug}>
            <a className='absolute bottom-[22px] right-4 h-[22px] z-10 pl-4 decoration-transparent'>
              <div className="text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                <p className=''>Bereitgestellt von:</p>
                <p className='pt-0'>{data.member.title} {data.member.firstname} {data.member.lastname}</p>
              </div>
            </a>
          </Link>
        )}
        <Link legacyBehavior href={"/VerseExkurs/firmen/" + data.ship.manufacturer?.firmen_name}>
          <a className='absolute bottom-0 h-[22px] z-10 pl-4 decoration-transparent'>
            <p className="top-0 bottom-0 py-0 mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
              {data.ship.manufacturer?.firmen_name}
            </p>
          </a>
        </Link>
        <Link legacyBehavior href={'/ShipExkurs/' + data.ship.slug}>
          {/* <motion.a  initial={{ borderRadius: "16px 16px 16px 16px" }} animate={{ borderRadius: "16px 16px 0px 0px" }} exit={{ borderRadius: "16px 16px 16px 16px" }} transition={{duration: 1}} className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover focus:outline-none group bg-white/5' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.ship.storeImage?.id}?height=400)` }}> */}
          <a>
            <motion.div animate={detailView == true ? "detail" : "normal"} variants={imageVariants} transition={{ ease: "easeInOut", duration: 1 }} className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-2xl focus:outline-none group bg-white/5' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.ship.storeImage?.id}?height=400)` }}>
              <div className="absolute bottom-0 w-full h-[49px] pl-4 bg-opacity-80 bg-bg-secondary">
                <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
                  {data.ship.name + (data.custom_data.name ? (` - "${data.custom_data.name}"`) : '')}
                </p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
      {/* <hr className='border-[3px] mt-0 bg-primary border-primary border-opacity-90 rounded-[20px] shadow-sm shadow-white box-border bg-[rgba(39,43,48,.9] before:absolute before:-top-[3px] before:right-10 before:left-10 before:box-border after:box-border before:h-1 before:bg-[#444] before:rounded-b after:absolute after:-bottom-[3px] after:right-10 after:left-10 after:h-1 after:bg-[#444] after:rounded-t' /> */}
      {/* <motion.div initial={{ height: 0 }} animate={{ height: '200px' }} exit={{ height: 0 }} className="overflow-hidden h-[200px] px-1 relative transition-all duration-500 ease w-full"> */}
      <motion.div animate={detailView == true ? "detail" : "normal"} variants={detailViewVariants} transition={{ ease: "easeOut" }} className="relative w-full h-0 px-1 overflow-hidden transition-all duration-500 ease">
        <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-3 w-full">
          <div className="col-span-1 1.5xl:col-span-3">
            <div className="grid grid-cols-2 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm truncate">Klassifizierung:</p>
                <p className="p-0 text-primary">
                  {data.ship.classification != null
                    ? data.ship.classification
                    : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Crew:</p>
                <p className="p-0 text-primary">
                  {data.ship.minCrew != null ? data.ship.minCrew + " - " + data.ship.maxCrew : 'N/A'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm">Kaufpreis:</p>
                <p className="p-0 normal-case text-primary">
                  {data.ship.price != null
                    ? data.ship.price
                      .toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') +
                    ' aUEC'
                    : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Fracht:</p>
                <p className="p-0 text-primary">
                  {data.ship.cargo ? data.ship.cargo + ' scu' : 'N/A'}
                </p>
              </div>
            </div>
            <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
            <div className="grid grid-cols-3 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm">Länge:</p>
                <p className="p-0 text-primary">
                  {data.ship.length ? data.ship.length + ' m' : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Breite:</p>
                <p className="p-0 text-primary">
                  {data.ship.length ? data.ship.beam + ' m' : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Höhe:</p>
                <p className="p-0 text-primary">
                  {data.ship.length ? data.ship.height + ' m' : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </BasicPanel>
  )
}

export default HangarShipDetailCard