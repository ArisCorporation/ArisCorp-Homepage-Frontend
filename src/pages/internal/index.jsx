import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'
import ProtectedLayout from './layout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineLiveHelp } from 'react-icons/md'
import Head from 'next/head'
import { useState } from 'react'
import Modal from 'components/modal'
import DefaultButton from 'components/DefaultButton'

export default function InternalIndex() {
  const { data: sessionData } = useSession()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState()
  const siteTitle = 'ArisCorp Management System'

  function openHelpModal() {
    setModalType('help')
    setModal(true)
  }
  function closeModal() {
    setModal(false)
    setTimeout(() => {
      setModalType('')
    }, 600)
  }

  return (
    <ProtectedLayout helpAction={openHelpModal}>
       <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <Modal
        state={modal}
        setState={setModal}
        title={modalType == 'help' && 'Hilfe:'}
        closeFunction={closeModal}
        wxxl={modalType == 'help' ? true : false}
      >
        <div className="mb-2">
          {modalType == 'help' && (
            <div className="px-8">
              <div>
                <div>
                  <p>Willkommen im A.M.S.</p>
                  <p>Klicke einfach auf eine Schaltfläche um zu navigieren. Alternative kannst du auch die Seitenleiste nutzen.</p>
                  <p>Bitte Beachte: Manche Seiten sind noch nicht verfügbar oder für dich gesperrt.</p>
                </div>
              </div>
              <div className="w-full mt-8 space-x-12">
                <DefaultButton animate danger action={() => closeModal()}>
                  Schließen!
                </DefaultButton>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <div className='mt-4'>
        <div className="grid max-w-6xl gap-4 mx-auto xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          <GridItem
            title="Mein Profil"
            link="profile"
            image="1bc449a2-c0ea-422f-9da5-7d83e5e083b1"
          />
          <GridItem
            title="Mein Hangar"
            link="hangar"
            image="cb114fb9-3af3-48ba-a435-3d74b0b8b254"
          />
          <GridItem
            title="Nachrichten"
            link="messages"
            image="e4398951-ffdf-4fd8-a538-d6f4df38d417"
            notReleased
          />
          <GridItem
            title="Ereignis Planer"
            link="calendar"
            image="bd281169-dbcf-4a8b-ad52-7d1184874ea6"
            notReleased
          />
          <GridItem
            title="Beitrags-Editor"
            link="posts"
            image="01fe30b0-f90f-4cb9-b215-350f3ca8089a"
            notReleased
          />
          <GridItem
            title="ArisCorp Mitarbeiter"
            link="members"
            svg
            image="60a50490-aba3-444e-8244-8fc425c7ceba"
          />
          <GridItem
            title="ArisCorp Flotte"
            link="fleet"
            image="cfa2c2ab-0559-47f3-9067-d25ee8955f5d"
          />
          <GridItem
            title="Abteilungsboards"
            link="boards"
            image="8cf91577-c8ae-438a-9556-fafab8008752"
            notReleased
          />
          <GridItem
            title="Missionsplaner"
            link="planer"
            notReleased
            image="aeded9e1-6c2c-4f78-a4d1-251ac26a7bc3"
          />
          <GridItem
            title="Missionsboard"
            link="board"
            image="1351ed99-17b2-4979-b6bc-af26a7433255"
            notReleased
          />
          <div />
          <div />
          <GridItem
            title="Administration"
            link="admin"
            image="096e2ade-9486-4103-8317-e9f463fe84b0"
            locked={
              sessionData &&
              (sessionData.user.position_level == 'administration' ||
                sessionData.user.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb')
                ? false
                : true
            }
          />
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
