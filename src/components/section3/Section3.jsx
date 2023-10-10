import InnerHUD from "./InnerHUD";
import OuterHUD from "./OuterHUD";
import Cube from "./Cube";
// import Image from "next/image";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const animateImage = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

const Section3 = () => {
  // const quality = useSelector((state) => state.changeQuality.quality);
  const themeMode = useSelector((state) => state.theme.mode);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });
  return (
    <AnimatePresence>
      {currentSection === 2 && section2part == 2 && (
        <>
          <Box
            style={{
              position: "fixed",
              top: "0%",
              left: "0%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Box
              component={motion.div}
              variants={animateImage}
              initial='init'
              animate='animate'
              exit='hidden'
            ></Box>
            <InnerHUD scrollProgress={smoothScroll} />
            <OuterHUD scrollProgress={smoothScroll} />
            <Cube />
          </Box>
          <Box
            className='ghost'
            // style={{ height: `${currentSection === 3 ? "500vh" : "100vh"}` }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Section3;
