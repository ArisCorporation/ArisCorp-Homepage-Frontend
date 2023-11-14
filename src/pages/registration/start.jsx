import { BasicPanelButton } from 'components/panels';
import { animate, motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function InternalLogin () {
  const router = useRouter()
  const { step } = router.query;
  const welcomeMessage = "Willkommen beim ArisCorp-Registrierungsprozess";
  const welcomeCount = useMotionValue(0);
  const welcomeRounded = useTransform(welcomeCount, (latest) => Math.round(latest));
  const welcomeText = useTransform(welcomeRounded, (latest) =>
    welcomeMessage.slice(0, latest)
  );

  useEffect(() => {
    const welcomeControls = animate(welcomeCount, welcomeMessage.length, {
      type: "tween",
      duration: 4,
      ease: "easeInOut"
    });
    welcomeControls.stop;
  }, []);

  useEffect(() => {
    if (step == "start") {
      const welcomeControls = animate(welcomeCount, welcomeMessage.length, {
        type: "tween",
        duration: 4,
        ease: "easeInOut"
      });
      welcomeControls.stop;
    } else if (step == "2") {
      const welcomeControls = animate(welcomeCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      welcomeControls.stop;
    }

    if (step == "2") {
      const secondControls = animate(secondCount, secondMessage.length, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
        delay: 1
      });
      secondControls.stop;
    } else if (step == "3") {
      const secondControls = animate(secondCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      secondControls.stop;
    }
  }, [step]);

  return (
    <>
      <div className='flex justify-center text-center'>
        <h1>
          <motion.span>{welcomeText}</motion.span>
          <CursorBlinking />
        </h1>
      </div>
      <div className="flex justify-center mt-6 space-x-8">
        <BasicPanelButton animate a href={"/registration/komplex"}>
          Start komplex...
        </BasicPanelButton>
        <BasicPanelButton animate a href={"/registration/komplex"}>
          Start einfach...
        </BasicPanelButton>
      </div>
    </>
  );
}


const CursorBlinking = () => {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-[43px] w-[1px] translate-y-2 bg-white"
    />
  )
}