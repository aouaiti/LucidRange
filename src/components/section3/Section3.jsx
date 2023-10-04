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
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });
  return (
    <AnimatePresence>
      {currentSection === 3 && (
        <>
          <Box
            style={{
              position: "fixed",
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
              initial="init"
              animate="animate"
              exit="hidden"
            >
              {/* <Image
                layout="fill"
                objectFit="cover"
                alt="back"
                src="/HUDBack6.jpg"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRnQCAABXRUJQVlA4WAoAAAAgAAAABQAAAwAASUNDUBgCAAAAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCA2AAAAsAEAnQEqBgAEAAOAWiWoAnQA9IG1bgD+8bc/o51GRFx4G0UdX+RptYn5gkb1jBEpddNl7gAA"
                style={{
                  filter: `${themeMode === "dark" ? "" : "hue-rotate(346deg)"}`,
                  transition: "all 1s ease 0s",
                }}
              /> */}
            </Box>
            <InnerHUD scrollProgress={smoothScroll} />
            <OuterHUD scrollProgress={smoothScroll} />
            <Cube />
          </Box>
          <Box
            className="ghost"
            style={{ height: `${currentSection === 3 ? "500vh" : "100vh"}` }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Section3;
