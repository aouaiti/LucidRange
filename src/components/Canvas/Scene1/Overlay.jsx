// import { Logo } from '@pmndrs/branding'
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineHighlight,
  AiOutlineShopping,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "./store";
import { useSelector } from "react-redux";

export function Overlay() {
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.4 };
  const transition2 = { type: "spring", duration: 0.4 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0.5 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  };
  const config2 = {
    initial: {
      x: 0,
      opacity: 0,
      transition: { ...transition2, delay: 0.4 },
    },
    animate: { x: 0, opacity: 1, transition: { ...transition2, delay: 0.4 } },
    exit: { x: 0, opacity: 0, transition: { ...transition2, delay: 0.4 } },
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: `${currentSection !== 2 ? -1 : 999}`,
        // transition: "all 0.4s ease-in-out",
      }}
    >
      {/* <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <img
          src="LR_fill.png"
          style={{ width: "35px", height: "35px" }}
          alt="logo"
        />
        <motion.div
          animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }}
          transition={transition}
        >
          <AiOutlineShopping size="3em" />
        </motion.div>
      </motion.header> */}
      {section2part === 0 && currentSection === 2 && (
        <AnimatePresence mode={"wait"}>
          {snap.intro ? (
            <motion.section key="main" {...config} className="canvasOverlay">
              <div className="canvasOverlay--container">
                <motion.div
                  key="title"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 5,
                    stiffness: 40,
                    restDelta: 0.001,
                    duration: 0.3,
                  }}
                >
                  <h1
                    style={{
                      WebkitTextFillColor: "transparent",
                      WebkitTextStrokeWidth: "3px",
                    }}
                  >
                    LET'S DO IT.
                  </h1>
                </motion.div>
                <div className="support--content">
                  <motion.div
                    key="p"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      damping: 7,
                      stiffness: 30,
                      restDelta: 0.001,
                      duration: 0.6,
                      delay: 0.2,
                      delayChildren: 0.2,
                    }}
                  >
                    <p>
                      Create your unique and exclusive shirt with our brand-new
                      3D customization tool.{" "}
                      <strong>Unleash your imagination</strong> and define your
                      own style.
                    </p>
                    <button
                      style={{ background: snap.color }}
                      onClick={() => (state.intro = false)}
                    >
                      CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section key="custom" {...config2}>
              <Customizer />
            </motion.section>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function Customizer() {
  const snap = useSnapshot(state);
  return (
    <div className="customizer">
      <div className="color-options">
        {snap.colors.map((color) => (
          <div
            key={color}
            className={`circle`}
            style={{ background: color }}
            onClick={() => (state.color = color)}
          ></div>
        ))}
      </div>
      <div className="decals">
        <div className="decals--container">
          {snap.decals.map((decal) => (
            <div
              key={decal}
              className={`decal`}
              onClick={() => (state.decal = decal)}
            >
              <img src={decal + "_thumb.png"} alt="brand" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="share"
        style={{ background: snap.color }}
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector(".canvas")
              .firstChild.firstChild.toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
        <AiFillCamera size="1.3em" />
      </button>
      <button
        className="exit"
        style={{ background: snap.color }}
        onClick={() => (state.intro = true)}
      >
        GO BACK
        <AiOutlineArrowLeft size="1.3em" />
      </button>
    </div>
  );
}
