import React from "react";
import styles from "./moon.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleMode } from "../../Features/globalUiVars/theme";

const animation = {
  day: {
    y: -100,
    opacity: 0,
  },
  night: {
    y: 0,
    opacity: 1,
    scale: 0.4,
    transition: {
      duration: 0.5,
      type: "spring",
    },
    default: { ease: "linear" },
  },
};

export default function Moon({ isDay, setIsDay }) {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <motion.div
      onClick={() => dispatch(toggleMode("light"))}
      variants={animation}
      initial="night"
      animate={`${themeMode === "light" ? "day" : "night"}`}
      className={styles.moon}
    >
      <div className={styles.details}></div>
      <div className={`${styles.details} ${styles.one}`}></div>
      <div className={`${styles.details} ${styles.two}`}></div>
      <div className={`${styles.details} ${styles.three}`}></div>
      <div className={`${styles.details} ${styles.four} ${styles.small}`}></div>
    </motion.div>
  );
}
