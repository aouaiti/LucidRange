import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useCallback, useEffect, useRef } from "react";
import styles from "./stars.module.scss";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Parts = ({ isDay }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const StyledStars = styled(motion.div)`
    background-color: red;
    width: 200px;
    transiton: 1s;
    // opacity: ${() => (isDay ? "0" : "1")};
  `;

  const animate = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const ref = useRef();

  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // container.canvas.size.height = -100;
    // console.log(container);
  }, []);

  const options = {
    // preset: "stars",
    particles: {
      number: {
        value: 355,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 5.48927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  };

  return (
    <motion.div
      variants={animate}
      initial="visible"
      animate={`${themeMode === "light" ? "hidden" : "visible"}`}
      style={{
        zIndex: "999999999",
        width: "inherit",
        height: "inherit",
      }}
    >
      <Particles
        ref={ref}
        className={styles.parts}
        // params={{
        //   background: {
        //     color: "transparent",
        //   },
        //   ...options,
        // }}
        options={options}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </motion.div>
  );
};

export default Parts;
