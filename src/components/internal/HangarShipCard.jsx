import { BasicPanel } from 'components/panels'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'

const HangarShipDetailCard = ({
  data,
  detailView,
  editAction,
  removeAction,
  fleetView,
  hangarView,
  color,
}) => {
  const ship = data.ship || data
  const custom_data = data.custom_data
  const imageVariants = {
    normal: { borderRadius: '16px 16px 16px 16px' },
    detail: { borderRadius: '16px 16px 0px 0px' },
  }
  const detailViewVariants = {
    normal: { height: '0px' },
    detail: {
      height:
        200 +
        ((fleetView || hangarView) && custom_data?.active_module ? 89 : 0) +
        'px',
    },
  }
  const gameplayName = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  }

  return (
    <BasicPanel color={color ? color : false}>
      <div className="absolute z-50 flex bottom-1 right-1">
        {editAction && (
          <div
            onClick={editAction}
            className="flex items-center justify-center w-10 h-10 transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 hover:duration-300"
          >
            <MdOutlineModeEditOutline className="w-5 h-5" />
          </div>
        )}
        {removeAction && (
          <div
            onClick={removeAction}
            className="flex items-center justify-center w-10 h-10 transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 hover:text-red-500 hover:duration-300"
          >
            <BsTrash className="w-5 h-5" />
          </div>
        )}
      </div>
      {ship.productionStatus && (
        <div className="absolute z-50 flex top-2 left-2">
          <div
            onClick={removeAction}
            className="flex items-center justify-center cursor-pointer w-fit h-100 text-stroke"
          >
            {ship.productionStatus == 'flight-ready' ? (
              <span className="text-primary">Flugfertig</span>
            ) : ship.productionStatus == 'in-concept' ? (
              <span className="text-white">In Konzept</span>
            ) : ship.productionStatus == 'in-production' ? (
              <span className="text-secondary">In Produktion</span>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
      <div
        className={
          'relative transition-all duration-500 ease ' +
          (fleetView ? 'h-[210px] 3.5xl:h-[200px]' : 'h-[200px]')
        }
      >
        <motion.div
          initial="hidden"
          whileHover="hover"
          className="absolute z-[15] w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full right-2 top-2"
          style={{
            backgroundImage: `url(https://cms.ariscorp.de/assets/${
              data.custom_data?.department?.gameplay_logo?.id ||
              data.custom_data?.department?.gameplay_logo
            }?height=400)`,
          }}
        >
          <motion.div
            variants={gameplayName}
            className="absolute z-50 flex h-16 transition-all duration-200 right-20"
          >
            <div className="bg-[#111] h-fit my-auto rounded-xl px-3">
              {data.custom_data?.department?.gameplay_name}
            </div>
          </motion.div>
        </motion.div>
        {(fleetView && data.member?.slug) && (
          <Link legacyBehavior href={'/biografie/' + data.member.slug}>
            <a className="absolute before:absolute bottom-[0px] h-[22px] right-4 z-10 pl-4 decoration-transparent">
              <div className="text-xs leading-none transition-colors duration-200 group text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
                <p className="pt-0">
                  <span
                    className={
                      custom_data.planned
                        ? 'text-secondary/50 group-hover:text-secondary/80'
                        : ''
                    }
                  >
                    {!custom_data.planned ? 'Bereitgestellt' : 'Geplant'} von:
                  </span>
                  {data.member.title ? ' ' + data.member.title + ' ' : ''}{' '}
                  {data.member.firstname} {data.member.lastname}
                </p>
              </div>
            </a>
          </Link>
        )}
        <Link
          legacyBehavior
          href={'/VerseExkurs/firmen/' + ship.manufacturer?.slug}
        >
          <a
            className={
              'absolute h-[22px] z-10 pl-4 decoration-transparent ' +
              (fleetView ? 'bottom-[11px] 3.5xl:bottom-0' : 'bottom-0')
            }
          >
            <p className="top-0 bottom-0 py-0 mb-1 text-xs leading-none transition-colors duration-200 text-white/50 hover:text-white/80 hover:cursor-pointer hover:duration-300">
              {ship.manufacturer?.firmen_name}
            </p>
          </a>
        </Link>
        <Link legacyBehavior href={'/ShipExkurs/' + ship.slug}>
          {/* <motion.a  initial={{ borderRadius: "16px 16px 16px 16px" }} animate={{ borderRadius: "16px 16px 0px 0px" }} exit={{ borderRadius: "16px 16px 16px 16px" }} transition={{duration: 1}} className='relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover focus:outline-none group bg-white/5' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${ship.storeImage?.id}?height=400)` }}> */}
          <a>
            <motion.div
              animate={detailView == true ? 'detail' : 'normal'}
              variants={imageVariants}
              transition={{ ease: 'easeInOut', duration: 1 }}
              className="relative block w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-2xl focus:outline-none group bg-white/5"
              style={{
                backgroundImage: `url(https://cms.ariscorp.de/assets/${ship.storeImage?.id}?height=400)`,
              }}
            >
              <div
                className={
                  'absolute bottom-0 w-full pl-4 bg-opacity-80 bg-bg-secondary ' +
                  (fleetView ? '3.5xl:h-[49px] h-[59px]' : 'h-[49px]')
                }
              >
                <p className="pb-0 text-lg leading-none transition-colors duration-200 text-secondary/90 group-hover:text-secondary group-hover:duration-300">
                  {ship.name +
                    (data.custom_data?.name
                      ? ` - "${data.custom_data.name}"`
                      : '')}
                </p>
              </div>
            </motion.div>
            {custom_data?.planned && (
              <div
                className={
                  'absolute right-2 text-stroke ' + (fleetView ? 'bottom-[59px] 3.5xl:bottom-[49px]' : 'bottom-[49px]')
                }y
              >
                Geplant
              </div>
            )}
          </a>
        </Link>
      </div>
      {/* <hr className='border-[3px] mt-0 bg-primary border-primary border-opacity-90 rounded-[20px] shadow-sm shadow-white box-border bg-[rgba(39,43,48,.9] before:absolute before:-top-[3px] before:right-10 before:left-10 before:box-border after:box-border before:h-1 before:bg-[#444] before:rounded-b after:absolute after:-bottom-[3px] after:right-10 after:left-10 after:h-1 after:bg-[#444] after:rounded-t' /> */}
      {/* <motion.div initial={{ height: 0 }} animate={{ height: '200px' }} exit={{ height: 0 }} className="overflow-hidden h-[200px] px-1 relative transition-all duration-500 ease w-full"> */}
      <motion.div
        animate={detailView == true ? 'detail' : 'normal'}
        variants={detailViewVariants}
        transition={{ ease: 'easeOut' }}
        className="relative w-full h-0 px-1 overflow-hidden transition-all duration-500 ease"
      >
        <div className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-3 w-full">
          <div className="col-span-1 1.5xl:col-span-3">
            <div className="grid grid-cols-2 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm truncate">Klassifizierung:</p>
                <p className="p-0 text-primary">
                  {ship.classification != null ? ship.classification : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Crew:</p>
                <p className="p-0 text-primary">
                  {ship.minCrew != null
                    ? ship.minCrew + ' - ' + ship.maxCrew
                    : 'N/A'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm">Kaufpreis:</p>
                <p className="p-0 normal-case text-primary">
                  {ship.price != null
                    ? ship.price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + ' aUEC'
                    : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Fracht:</p>
                <p className="p-0 text-primary">
                  {ship.cargo ? ship.cargo + ' scu' : 'N/A'}
                </p>
              </div>
            </div>
            <hr className="relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
            <div className="grid grid-cols-3 uppercase">
              <div className="col-span-1">
                <p className="pb-0 text-sm">Länge:</p>
                <p className="p-0 text-primary">
                  {ship.length ? ship.length + ' m' : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Breite:</p>
                <p className="p-0 text-primary">
                  {ship.length ? ship.beam + ' m' : 'N/A'}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pb-0 text-sm">Höhe:</p>
                <p className="p-0 text-primary">
                  {ship.length ? ship.height + ' m' : 'N/A'}
                </p>
              </div>
            </div>
            {(fleetView || hangarView) && custom_data?.active_module && (
              <div>
                <div className="flex mt-4">
                  <span className="inline-block mr-4 min-w-fit">
                    Spezifische Informationen:
                  </span>
                  <hr className="relative inline-block mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary" />
                </div>
                <div className="grid grid-cols-2 uppercase">
                  <div className="col-span-1">
                    <p className="pb-0 text-sm">Aktives Modul:</p>
                    <p className="p-0 text-primary">
                      {custom_data.active_module?.name
                        ? custom_data.active_module?.name
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </BasicPanel>
  )
}

export default HangarShipDetailCard
