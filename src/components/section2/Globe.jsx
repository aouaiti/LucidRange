import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Box } from "@mui/material";

const animateParent = {
  exit: {
    opacity: 0,
  },
};

const animateEarth = {
  initial: {
    scale: 0.1,
    rotate: 0,
    opacity: 0,
  },
  pimpIt: {
    scale: [1, 1.5, 1],
    rotate: 3160,
    filter: ["blur(5px)", "blur(0px)"],
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

const animateMonuments = {
  initial: {},
  pimpIt: {
    // x: 10,
    transition: {
      type: "string",
      // delay: 1,
      staggerChildren: 0.5,
      // duration: 1,
      ease: "easeIn",
    },
  },
};
const animateElem = {
  initial: {
    scale: 0,
  },
  pimpIt: (x) => ({
    // zIndex: 99,
    scale: [0.1, 1.5, 1],
    y: [0, 0, x],
    transition: {
      type: "srping",
      // duration: 1,
      // ease: "easeOut"
    },
  }),
};

const Planet = () => {
  return (
    <Box
      component={motion.div}
      variants={animateEarth}
      initial="initial"
      animate="pimpIt"
      exit="exit"
    >
      <Image
        src={"/earth.png"}
        alt="earth"
        width="200"
        height="200"
        // style={{ width: "200px", height: "200px" }}
      />
    </Box>
  );
};
const Monuments = () => {
  return (
    <Box
      component={motion.div}
      variants={animateMonuments}
      initial="initial"
      animate="pimpIt"
      style={{ display: "flex", alignItems: "flex-end" }}
    >
      <Box
        component={motion.div}
        variants={animateElem}
        style={{ zIndex: "99", order: "2", margin: "0 -30px" }}
        custom={40}
      >
        <Image
          src={"/fr-eifel.png"}
          alt="earth"
          width="120"
          height="120"
          //   style={{ width: "100px", height: "120px" }}
        />
      </Box>
      <Box
        component={motion.div}
        variants={animateElem}
        style={{ order: "1" }}
        custom={40}
      >
        <Image
          src={"/fr-baguette.png"}
          alt="earth"
          width="100"
          height="100"
          style={{
            // width: "100px",
            // height: "100px",
            transform: "rotate(30deg)",
          }}
        />
      </Box>

      <Box
        component={motion.div}
        variants={animateElem}
        style={{ order: "3" }}
        custom={60}
      >
        <Image
          src={"/fr-flag.png"}
          alt="earth"
          width="100"
          height="100"
          style={{
            // width: "100px",
            // height: "100px",
            transform: "rotate(30deg)",
            marginLeft: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

function Globe() {
  return (
    <Box
      component={motion.div}
      variants={animateParent}
      exit="exit"
      style={{
        position: "fixed",
        bottom: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        // zIndex: "9",
      }}
    >
      <Monuments />
      <Planet />
    </Box>
  );
}
export default memo(Globe);
