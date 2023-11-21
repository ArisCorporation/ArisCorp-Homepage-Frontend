import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'
import ProtectedLayout from './layout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InternalIndex() {
  const { data: sessionData } = useSession()
  return (
    <ProtectedLayout>
      <div>
        <div>
          <div className="w-1/4">
            <Image
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={1112}
              height={477}
              src={
                process.env.NEXT_PUBLIC_FILES_URL +
                '3090187e-6348-4290-a878-af1b2b48c114?format=webp'
              }
            />
          </div>
          <hr />
        </div>
        <div className="grid max-w-6xl gap-4 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {/* <div className="grid"> */}
          <GridItem
            title="Mein Profil"
            link="profile"
            image="1bc449a2-c0ea-422f-9da5-7d83e5e083b1"
          />
          <GridItem
            title="Mein Hangar"
            link="profile"
            image="cb114fb9-3af3-48ba-a435-3d74b0b8b254"
          />
          <GridItem
            title="Nachrichten"
            link="profile"
            image="e4398951-ffdf-4fd8-a538-d6f4df38d417"
            notReleased
          />
          <GridItem
            title="Ereignis Planer"
            link="profile"
            image="bd281169-dbcf-4a8b-ad52-7d1184874ea6"
            notReleased
          />
          <GridItem
            title="Beitrags-Editor"
            link="profile"
            image="01fe30b0-f90f-4cb9-b215-350f3ca8089a"
            notReleased
          />
          <GridItem
            title="ArisCorp Mitarbeiter"
            link="profile"
            svg
            image="60a50490-aba3-444e-8244-8fc425c7ceba"
          />
          <GridItem
            title="ArisCorp Flotte"
            link="profile"
            image="cfa2c2ab-0559-47f3-9067-d25ee8955f5d"
          />
          <GridItem
            title="Abteilungsboards"
            link="profile"
            image="8cf91577-c8ae-438a-9556-fafab8008752"
            notReleased
          />
          <GridItem
            title="Missionsplaner"
            link="profile"
            notReleased
            image="aeded9e1-6c2c-4f78-a4d1-251ac26a7bc3"
          />
          <GridItem
            title="Missionsboard"
            link="profile"
            image="1351ed99-17b2-4979-b6bc-af26a7433255"
            notReleased
          />
          <div />
          <div />
          <GridItem
            title="Administration"
            link="profile"
            image="096e2ade-9486-4103-8317-e9f463fe84b0"
            locked={
              sessionData &&
              (sessionData.user.position_level == 'administration' ||
                sessionData.user.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb')
                ? false
                : true
            }
          />
          {/* <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover="hover"
            className="relative w-full ease-in-out cursor-pointer h-fit group aspect-square"
          >
            <motion.div
              initial={{ transform: 'translateY(60%)' }}
              variants={gridTexts}
              className="absolute flex justify-center w-full h-full z-5"
            >
              <div className="my-auto">
                <p className="p-0 text-white/75">Coming Soon...</p>
              </div>
            </motion.div>
            <motion.div
              variants={gridImages}
              initial={{ opacity: 0.4 }}
              className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929] rounded-xl"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_FILES_URL}1bc449a2-c0ea-422f-9da5-7d83e5e083b1?format=webp&height=400)`,
              }}
            />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover="hover"
            className="relative w-full ease-in-out cursor-pointer h-fit group aspect-square"
          >
            <motion.div
              initial={{ transform: 'translateY(60%)' }}
              variants={gridTexts}
              className="absolute flex justify-center w-full h-full z-5"
            >
              <div className="my-auto">
                <p
                  className="p-0 text-md redacted-small"
                  data-text="[ KEIN ZUGRIFF ]"
                >
                  [ KEIN ZUGRIFF ]
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={gridImages}
              initial={{ opacity: 0.4 }}
              className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929] rounded-xl"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_FILES_URL}1bc449a2-c0ea-422f-9da5-7d83e5e083b1?format=webp&height=400)`,
              }}
            />
          </motion.div> */}
        </div>
      </div>
    </ProtectedLayout>
  )
}

const GridItem = ({ title, link, image, locked, notReleased }) => {
  const gridImages = {
    hover: { scale: 1.1, opacity: 0.4 },
  }
  const gridTexts = {
    hover: { transform: 'translateY(0%)' },
  }

  return (
    <Link href={!locked && !notReleased ? '/internal/' + link : ''}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        whileHover="hover"
        className="relative w-full mb-4 ease-in-out cursor-pointer lg:mb-6 h-fit group aspect-square"
      >
        <motion.div
          initial={{ transform: 'translateY(60%)' }}
          variants={gridTexts}
          className="absolute flex justify-center w-full h-full z-5"
        >
          <div className="hidden group-hover:contents">
            <div className="my-auto">
              {!locked && !notReleased && (
                <p className="p-0 text-[.99rem] text-white/75">{title}</p>
              )}
              {locked && (
                <p
                  className="p-0 text-md redacted-small"
                  data-text="[ KEIN ZUGRIFF ]"
                >
                  [ KEIN ZUGRIFF ]
                </p>
              )}
              {notReleased && (
                <p className="p-0 text-white/75">Bald verfügbar...</p>
              )}
            </div>
          </div>
          <div className="contents group-hover:hidden">
            <div className="my-auto">
              <p className="p-0 text-[.99rem] text-white/75">{title}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={gridImages}
          initial={locked || notReleased ? { opacity: 0.4 } : { opacity: 1 }}
          className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929] rounded-xl"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_FILES_URL + image
            }?format=webp&height=400)`,
          }}
        />
      </motion.div>
    </Link>
  )
}
