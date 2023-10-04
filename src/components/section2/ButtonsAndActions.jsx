import { useSelector, useDispatch } from "react-redux";
import { selectResume } from "../../Features/globalUiVars/section2";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";

const animation = {
  init: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  animate: (val) => ({
    opacity: val ? 1 : 0,
    transition: {
      duration: 0.5,
    },
  }),
};

export default function ButtonsAndActions() {
  const dispatch = useDispatch();
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  useEffect(() => {
    const abtn = document.querySelector("#actionButtons");
    abtn.addEventListener("wheel", preventScroll);
    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);
  return (
    <Box
      id="actionButtons"
      component={motion.div}
      variants={animation}
      initial="init"
      animate="animate"
      custom={selectedResume.active}
    >
      <IconButton
        sx={{
          position: "fixed",
          cursor: "pointer",
          zIndex: "9999",
          top: "calc(50% - 210px)",
          left: "49%",
          //   background: "red",
        }}
        // onClick={(e) => {
        //   //   e.preventDefault;
        //   //   e.stopPropagation();
        //   dispatch(
        //     selectResume({
        //       active: false,
        //       index: undefined,
        //       bodyWidth: undefined,
        //       resumeWidth: undefined,
        //       resumeLeftPosition: undefined,
        //       close: "byBotton",
        //     })
        //   );
        // }}
        aria-label="delete"
        size="small"
      >
        <CloseOutlinedIcon />
      </IconButton>
      <Button
        sx={{
          position: "fixed",
          cursor: "pointer",
          zIndex: "9999",
          top: "calc(50% + 193px)",
          left: "49%",
          transform: "translateX(-50%)",
          //   background: "red",
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
}
