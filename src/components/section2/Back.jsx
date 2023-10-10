import { useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Hor from "./Hor";
import ScrollingText from "./ScrollingText";
import { Box } from "@mui/material";
import { memo } from "react";

const animation = {
  anim1: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  anim2: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0% 20%)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  anim3: {
    clipPath: "polygon(0 20%, 100% 80%, 100% 100%, 0 100%)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  anim4: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    zIndex: 999,
    transition: {
      duration: 0.5,
    },
  },
};

const Back = ({ trigger, spanWidth, msg }) => {
  const section2part = useSelector((state) => state.section2.part);
  const BGColor = useSelector((state) => state.section2.backgroundPalette);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const lowerBackControls = useAnimation();
  const higherBackControls = useAnimation();

  useEffect(() => {
    if (section2part === trigger) {
      (async () => {
        await lowerBackControls.start("anim4");
        // await lowerBackControls.start("anim2");
        await lowerBackControls.start("anim3");
      })();
      (async () => {
        await higherBackControls.start("anim1");
        // await higherBackControls.start("anim3");
        await higherBackControls.start("anim2");
      })();
    }
  }, [section2part]);

  return (
    <AnimatePresence mode='wait'>
      {section2part === trigger && currentSection === 2 && (
        <>
          <Box
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              zIndex: "0",
            }}
          >
            <Box
              component={motion.div}
              className='lowerRef'
              // ref={lowerRef}
              variants={animation}
              exit='anim4'
              initial='anim1'
              animate={lowerBackControls}
              style={{
                position: "absolute",
                bottom: "0",
                width: "100vw",
                height: "100vh",
                background: BGColor[1],
                clipPath: "polygon(0 100%, 100% 100%, 100% 80%, 0 20%)",
              }}
            />
            <Box
              component={motion.div}
              className='HigherRef'
              // ref={lowerRef}
              variants={animation}
              exit='anim1'
              initial='anim1'
              animate={higherBackControls}
              style={{
                position: "absolute",
                bottom: "0",
                width: "100vw",
                height: "100vh",
                background: BGColor[0],
                clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0% 20%)",
              }}
            />
          </Box>
          <Hor spanWidth={spanWidth} />
          <ScrollingText msg={msg} />
        </>
      )}
    </AnimatePresence>
  );
};

export default memo(Back);
