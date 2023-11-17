import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'
import ProtectedLayout from './layout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InternalIndex() {
  const { data: session } = useSession()
  const gridImages = {
    hover: { scale: 1.1, opacity: 0.4 },
  }
  const gridTexts = {
    hover: { transform: 'translateY(-50%)' },
  }
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
        <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover="hover"
            className="relative w-full h-full overflow-hidden ease-in-out cursor-pointer group rounded-xl aspect-square"
          >
            <motion.div
              variants={gridImages}
              className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929]"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_FILES_URL}1bc449a2-c0ea-422f-9da5-7d83e5e083b1?format=webp&height=400)`,
              }}
            />
            <motion.div
              variants={gridTexts}
              className="absolute flex justify-center w-full h-full"
            >
              <p className="p-0 mx-auto my-0 text-white">Mein Profil</p>
            </motion.div>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover="hover"
            className="relative w-full h-full overflow-hidden ease-in-out cursor-pointer group rounded-xl aspect-square"
          >
            <motion.div
              variants={gridImages}
              className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929]"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_FILES_URL}1bc449a2-c0ea-422f-9da5-7d83e5e083b1?format=webp&height=400)`,
              }}
            />
            <motion.div
              variants={gridTexts}
              className="absolute flex justify-center w-full h-full"
            >
              <p className="p-0 mx-auto my-0 opacity-75">Coming Soon...</p>
            </motion.div>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover="hover"
            className="relative w-full h-full overflow-hidden ease-in-out cursor-pointer group rounded-xl aspect-square"
          >
            <motion.div
              variants={gridImages}
              className="h-full w-full bg-center bg-no-repeat bg-cover focus:outline-none bg-[#292929]"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_FILES_URL}1bc449a2-c0ea-422f-9da5-7d83e5e083b1?format=webp&height=400)`,
              }}
            />
            <motion.div
              variants={gridTexts}
              className="absolute flex justify-center w-full h-full"
            >
              {/* <p className="p-0 mx-auto my-0">Mein Profil</p> */}
              <div className="flex justify-center mb-6">
                <p
                  className="p-0 text-xl redacted-small"
                  data-text="[ REDACTED ]"
                >
                  [ REDACTED ]
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
