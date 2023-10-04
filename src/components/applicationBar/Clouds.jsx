import React from "react";
import styles from "./clouds.module.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const animateIt = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 0.5,
    transition: {
      staggerChildren: 0.1,
      // type: "spring",
      // stiffness: 1000,
      //   when: "afterChildren",
      //   delayChildren: 2,
      //   staggerDirection: -1,
      //   duration: 1,
    },
  },
};
const child = {
  initial: { y: -100 },
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
  },
};

function Clouds() {
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <>
      <motion.div
        variants={animateIt}
        initial="hidden"
        animate={themeMode === "light" ? "show" : "init"}
        // className={styles.con}
        style={{
          //   overflow: "hidden",a
          height: "70px",
          width: "100%",
          // background: "blue",
          padding: "10px 0 0 10px",
          position: "absolute",
          top: "0%",
        }}
      >
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.large} ${styles.cloud_1}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.normal} ${styles.cloud_2}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.small} ${styles.cloud_3}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.tiny} ${styles.cloud_4}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.large} ${styles.cloud_5}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.normal} ${styles.cloud_6}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.small} ${styles.cloud_7}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        {/* <motion.div className={`${styles.cloud} ${styles.tiny} ${styles.cloud_8}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </motion.div> */}
        <motion.div
          variants={child}
          className={`${styles.cloud} ${styles.small} ${styles.cloud_9}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        <motion.div
          variants={child}
          style={{ marginTop: "-12px" }}
          className={`${styles.cloud} ${styles.normal} ${styles.cloud_10}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
        {/* <motion.div className={`${styles.cloud} ${styles.tiny} ${styles.cloud_11}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </motion.div> */}
        <motion.div
          variants={child}
          style={{ marginTop: "-15px" }}
          className={`${styles.cloud} ${styles.small} ${styles.cloud_12}`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Clouds;
