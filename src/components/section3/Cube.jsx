import styles from "./Cube.module.scss";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { rotate } from "../../Features/globalUiVars/section3";
import Tilt from "react-parallax-tilt";
import { styled } from "@mui/material/styles";
import cubeFace from "./CubeFace";

const animate = {
  init: {
    rotateX: -10,
    rotateY: 350,
    scale: 0,
    transition: {
      delay: 2,
    },
  },
  hidden: {
    scale: 0,
  },
};

export default function Cube() {
  const [idle, setIdle] = useState(false);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);
  const rotation = useSelector((state) => state.section3.rotation);
  const themeMode = useSelector((state) => state.theme.mode);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  const control = useAnimation();
  const rotateY = useMotionValue(350);

  const CubeFace = styled(cubeFace)(({ theme }) => ({
    display: "flex",
    background: theme.palette.primary[themeMode],
    boxShadow: `0px 0px 3px ${themeMode === "light" ? "black" : "white"}`,
  }));

  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "instant",
    });
  }, [currentSection]);

  useEffect(() => {
    currentSection === 2 &&
      section2part === 2 &&
      control.start({ scale: 1, transition: { delay: 1 } });
    const timer = setTimeout(() => setIdle(true), 1000);
    return () => clearTimeout(timer);
  }, [currentSection]);
  useEffect(() => {
    if (rotation < 4 && idle)
      control.start({
        rotateX: -10,
        rotateY: 350 + rotation * 90,
        transition: {
          type: "spring",
          stifness: "10",
          dumping: "10",
        },
      });
    else if (rotation === 4)
      control.start({
        scale: 1,
        rotateX: -10 - 95,
        rotateY: 350 + rotation * 90 + 10,
        transition: { type: "spring", stifness: "10", dumping: "10" },
      });
  }, [rotation]);
  return (
    <>
      <motion.div
        className={styles.cube}
        animate={control}
        style={{ rotateY }}
        variants={animate}
        initial='init'
        exit='hidden'
      >
        <CubeFace
          who='Labidi Abdrahmen'
          desc='A hater'
          msg='wait wait , did i mention that you are a loser ?'
          rate={0.5}
          url='/3abdou.webp'
          className={styles.upper}
        />
        <CubeFace
          who='SLIM KHAMESSI'
          desc='My mentor'
          msg='Cool animation bro!'
          rate={4}
          url='/slim.webp'
          sx={{
            transform: "rotateY(0deg) translateZ(150px)",
          }}
        />

        <CubeFace
          who='Labidi Abdrahmen'
          desc='A hater'
          msg='nothing special, and i can do far better'
          rate={0.5}
          url='/3abdou.webp'
          sx={{
            transform: "rotateY(90deg) translateZ(150px)",
          }}
        />
        <CubeFace
          who='Ben ghrib houssem'
          desc='A hater'
          msg='The kabbalah is more important than dev'
          rate={2}
          url='/7oss.webp'
          sx={{
            transform: "rotateY(180deg) translateZ(150px)",
          }}
        />
        <CubeFace
          who='Labidi Abdrahmen'
          desc='A hater'
          msg="Even though i don't code am still a better dev than you"
          rate={1}
          url='/3abdou.webp'
          sx={{
            transform: "rotateY(270deg) translateZ(150px)",
          }}
        />
      </motion.div>
    </>
  );
}
