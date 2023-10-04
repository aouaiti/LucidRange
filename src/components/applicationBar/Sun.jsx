import React from "react";
import styles from "./sun.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleMode } from "../../Features/globalUiVars/theme";

const animation = {
  night: {
    y: -100,
    opacity: 0,
  },
  day: {
    y: 0,
    opacity: 1,
    scale: 0.4,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Sun({ isDay, setIsDay }) {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <motion.div
      onClick={() => dispatch(toggleMode("dark"))}
      className={styles.sun}
      variants={animation}
      initial="night"
      animate={`${themeMode === "light" ? "day" : "night"}`}
    >
      <div className={styles.ray_box}>
        <div className={`${styles.ray} ${styles.ray1}`}></div>
        <div className={`${styles.ray} ${styles.ray2}`}></div>
        <div className={`${styles.ray} ${styles.ray3}`}></div>
        <div className={`${styles.ray} ${styles.ray4}`}></div>
        <div className={`${styles.ray} ${styles.ray5}`}></div>
        <div className={`${styles.ray} ${styles.ray6}`}></div>
        <div className={`${styles.ray} ${styles.ray7}`}></div>
        <div className={`${styles.ray} ${styles.ray8}`}></div>
        <div className={`${styles.ray} ${styles.ray9}`}></div>
        <div className={`${styles.ray} ${styles.ray10}`}></div>
      </div>
    </motion.div>
  );
}
