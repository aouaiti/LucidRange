import styles from "./scrollingText.module.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function ParallaxText({ children, baseVelocity = 100 }) {
  const quality = useSelector((state) => state.changeQuality.quality);
  const BGColor = useSelector((state) => state.section2.backgroundPalette);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-10, -30, v)}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);

  useAnimationFrame((t) => {
    if (quality !== "high") return;
    if (!prevT.current) prevT.current = t;
    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box className={styles.parallax}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0 } }}
        exit={{ opacity: 0 }}
        className={styles.scroller}
        style={{
          position: "absolute",
          x,
          color: `${baseVelocity < 0 ? BGColor[1] : BGColor[0]}`,
          top: `${baseVelocity < 0 ? "10vh" : "calc(90vh)"}`,
        }}
      >
        <Typography variant="h2">{children} </Typography>
        <Typography variant="h2">{children} </Typography>
        <Typography variant="h2">{children} </Typography>
        <Typography variant="h2">{children} </Typography>
        <Typography variant="h2">{children} </Typography>
      </Box>
    </Box>
  );
}

export default function ScrollingText({ msg }) {
  return (
    <section style={{ position: "fixed" }}>
      <ParallaxText baseVelocity={5}> Lucid Range - </ParallaxText>
      <ParallaxText baseVelocity={-5}> {msg} -</ParallaxText>
    </section>
  );
}
