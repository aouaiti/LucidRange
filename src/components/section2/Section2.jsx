import Back from "./Back";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ScrollBlocker from "../trigger/ScrollBlocker";
import ButtonsAndActions from "./ButtonsAndActions";

const animate = {
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section2() {
  //////////////////////////////////redux boiler plate
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  //////////////////////////////////redux boiler plate end
  return (
    <AnimatePresence mode="wait">
      {currentSection === 2 && section2part >= 0 && section2part <= 3 && (
        <Box
          variants={animate}
          initial="initial"
          exit="exit"
          component={motion.div}
          id="section-2"
          style={{ margin: "0", textAlign: "center" }}
        >
          <ScrollBlocker />
          <Back
            key={0}
            trigger={0}
            spanWidth={"250vw"}
            msg={"3D configurator"}
          />
          <Back key={1} trigger={1} spanWidth={"4500px"} msg={"EPIC designs"} />
          <Back
            key={2}
            trigger={2}
            spanWidth={"150vw"}
            msg={"Everyone loves it"}
          />
          <ButtonsAndActions />
        </Box>
      )}
    </AnimatePresence>
  );
}

export default memo(Section2);
