import Head from 'next/head'
import { useRef } from "react";
import { AnimatePresence, useInView, motion } from "framer-motion";
import { BasicPanel } from 'components/panels';

let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

// const stagger = {
//   initial: {},
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//     }
//   }
// };
// const letter = {
//   initial: {
//     opacity: 0,
//     x: -400,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 1, ...transition
//     }
//   }
// };

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      duration: 1,
      type: 'spring',
      damping: 30,
      stiffness: 300,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0
  }
}

export default function Error404 () {

  const siteTitle = "404 - Astro Research and Industrial Service Corporation"

  return (
    // <AnimatePresence mode="wait" initial={false}>
    <div className="flex flex-wrap items-center justify-center w-full min-h-screen">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
      </Head>
      <div className="my-auto">
        <BasicPanel>
          <div
            className="grid grid-cols-1 px-4 py-3 uppercase 1.5xl:grid-cols-4"
          >
            <div className='col-span-1'>
              <div className='text-lg text-secondary'>
                Basis
              </div>
            </div>
            <motion.div variants={listVariants} initial="hidden" animate="visible" className='col-span-1 1.5xl:col-span-3'>
              <motion.div variants={itemVariants} className='grid grid-cols-3 uppercase'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Länge:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Breite:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Höhe:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className='grid grid-cols-2 uppercase'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Gewicht:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Frachtkapazität:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
              </motion.div>
              <AnimatedHr />
              <motion.div variants={itemVariants} className='grid grid-cols-2 uppercase'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Klassifizierung:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Größe:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
              </motion.div>
              <AnimatedHr />
              <motion.div variants={itemVariants} className='grid grid-cols-2 uppercase'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Min Crew:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Max Crew:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
              </motion.div>
              <AnimatedHr />
              <motion.div variants={itemVariants} className='grid grid-cols-2 uppercase'>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Treibstoff:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
                <div className="col-span-1">
                  <p className='pb-0 text-sm'>Quantum Treibstoff:</p>
                  <p className='p-0 text-primary'>N/A</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </BasicPanel>
      </div>


    </div>
    // </AnimatePresence>
  )
}


const AnimatedHr = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <motion.hr
        style={{
          width: isInView ? "100%" : "0%",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className='relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary'
      />
    </div>
  )
}
const AnimatedHrNormal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <motion.hr
        style={{
          width: isInView ? "100%" : "0%",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      />
    </div>
  )
}