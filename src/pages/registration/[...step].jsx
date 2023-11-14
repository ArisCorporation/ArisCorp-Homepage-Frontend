import { BasicPanelButton } from 'components/panels';
import { animate, motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function InternalLogin () {
  const router = useRouter()
  const { step } = router.query;
  const [currentStep, setCurrentStep] = useState()
  const [currenMode, setCurrentMode] = useState()
  const welcomeMessage = ("Schritt 1:");
  const welcomeMessageL2 = ("Basis Daten");
  const secondMessage = "zweite nachricht";
  const welcomeCount = useMotionValue(0);
  const welcomeCountL2 = useMotionValue(0);
  const secondCount = useMotionValue(0);
  const welcomeRounded = useTransform(welcomeCount, (latest) => Math.round(latest));
  const secondRounded = useTransform(secondCount, (latest) => Math.round(latest));
  const welcomeText = useTransform(welcomeRounded, (latest) =>
    welcomeMessage.slice(0, latest)
  );
  const secondText = useTransform(secondRounded, (latest) =>
    secondMessage.slice(0, latest)
  );
  const [welcomeMessageState, setWelcomeMessageState] = useState(true)
  const [secondMessageState, setSecondMessageState] = useState()
  const [showKStep1, setShowKStep1] = useState()
  const [showKStep2, setShowKStep2] = useState()

  useEffect(() => {
    const { step: test } = router.query
    if (Array.isArray(test)) {
      setCurrentStep(test[0])
      setCurrentMode(test[1])
    }
  }, [router])

  useEffect(() => {
    if (currentStep != null && currentStep != "") {
      if (currentStep == "1") {
        setShowKStep1(true)
      } else if (currentStep != "1") {
        setTimeout(() => {
          setShowKStep1(false)
        }, 1000);
      }
      if (currentStep == "2") {
        setShowKStep2(true)
      } else if (currentStep != "2") {
        setTimeout(() => {
          setShowKStep2(false)
        }, 1000);
      }
    }
  }, [currentStep])

  useEffect(() => {
    if (currentStep == "start") {
      const welcomeControls = animate(welcomeCount, welcomeMessage.length, {
        type: "tween",
        duration: 4,
        ease: "easeInOut"
      });
      welcomeControls.stop;
    } else if (currentStep == "2") {
      const welcomeControls = animate(welcomeCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      welcomeControls.stop;
    }

    if (currentStep == "2") {
      const secondControls = animate(secondCount, secondMessage.length, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
        delay: 1
      });
      secondControls.stop;
    } else if (currentStep == "3") {
      const secondControls = animate(secondCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      secondControls.stop;
    }
  }, [currentStep]);

  console.log("STEP", currentStep)

  return (
    <>
      <div className='flex justify-center text-center'>
        <h1>
          {showKStep1 && <TypingAnimation titleM="Schritt 1:" textM="Basis Daten" state={currentStep} step={1} ndelay duration={1.5} />}
          {showKStep2 && <TypingAnimation titleM="Schritt 2:" textM="Koane Ahnung" state={currentStep} step={2} duration={4} duration={1.5} />}
          {/* <motion.span>{welcomeText}</motion.span>
          <motion.span>{secondText}</motion.span>
          <CursorBlinking /> */}
        </h1>
      </div>
      {currentStep == "1" && (
        <div className="flex justify-center mt-6">
          <BasicPanelButton animate onClick={() => router.replace({ query: { step: ["2", "komplex"] } })}>
            Start...
          </BasicPanelButton>
        </div>
      )}
    </>
  );
}


const TypingAnimation = ({ titleM, textM, state, step, ndelay, duration }) => {
  const title = (titleM);
  const text = (textM);
  const titleCount = useMotionValue(0);
  const textCount = useMotionValue(0);
  const titleRounded = useTransform(titleCount, (latest) => Math.round(latest));
  const textRounded = useTransform(textCount, (latest) => Math.round(latest));
  const titleText = useTransform(titleRounded, (latest) =>
    title.slice(0, latest)
  );
  const textText = useTransform(textRounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    console.log("state", state)
    console.log(state == JSON.stringify(step + 1) ? "true" : "false")
    if (state == JSON.stringify(step)) {
      const titleControls = animate(titleCount, title.length, {
        type: "tween",
        duration: (duration || 4),
        ease: "easeInOut",
        delay: (!ndelay ? 1 : 0)
      });
      titleControls.stop;
      const textControls = animate(textCount, text.length, {
        type: "tween",
        duration: (duration || 4),
        ease: "easeInOut",
        delay: (!ndelay ? duration + 1 : duration)
      });
      textControls.stop;
    } else if (state == JSON.stringify(step + 1)) {
      const titleControls = animate(titleCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      titleControls.stop;
      const textControls = animate(textCount, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut"
      });
      textControls.stop;
    }

    // if (currentStep == "2") {
    //   const secondControls = animate(secondCount, secondMessage.length, {
    //     type: "tween",
    //     duration: 2,
    //     ease: "easeInOut",
    //     delay: 1
    //   });
    //   secondControls.stop;
    // } else if (currentStep == "3") {
    //   const secondControls = animate(secondCount, 0, {
    //     type: "tween",
    //     duration: 1,
    //     ease: "easeInOut"
    //   });
    //   secondControls.stop;
    // }
  }, [step, state]);

  return (
    <>
      <motion.span>{titleText}</motion.span>
      <br />
      <motion.span>{textText}</motion.span>
      <CursorBlinking />
    </>
  )
  // useEffect(() => {
  //   if (state == true) {
  //     const welcomeControls = animate(welcomeCount, welcomeMessage.length, {
  //       type: "tween",
  //       duration: 4,
  //       ease: "easeInOut"
  //     });
  //     welcomeControls.stop;
  //     const welcomeControlsL2 = animate(welcomeCountL2, welcomeMessageL2.length, {
  //       type: "tween",
  //       duration: 4,
  //       ease: "easeInOut"
  //     });
  //     welcomeControlsL2.stop;
  //   } else if (welcomeMessageState == false) {
  //     const welcomeControls = animate(welcomeCount, 0, {
  //       type: "tween",
  //       duration: 1,
  //       ease: "easeInOut"
  //     });
  //     welcomeControls.stop;
  //   }

  //   if ((secondMessageState != null && secondMessageState == true)) {
  //     const secondControls = animate(secondCount, secondMessage.length, {
  //       type: "tween",
  //       duration: 2,
  //       ease: "easeInOut",
  //       delay: 1
  //     });
  //     secondControls.stop;
  //   } else if (secondMessageState != null && secondMessageState == false) {
  //     const secondControls = animate(secondCount, 0, {
  //       type: "tween",
  //       duration: 1,
  //       ease: "easeInOut"
  //     });
  //     secondControls.stop;
  //   }
  // }, [welcomeMessageState, secondMessageState]);
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