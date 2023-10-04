import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { currentPart } from "../../Features/globalUiVars/section2";
import { memo } from "react";
// import Image from "next/image";
import ForumIcon from "@mui/icons-material/Forum";
import { selectResume } from "../../Features/globalUiVars/section2";

const Side = styled(Paper)(({ theme }) => ({
  background: `${
    theme.palette.mode === "light"
      ? alpha(theme.palette.primary.light, 0.7)
      : alpha(theme.palette.primary.dark, 0.7)
  }`,
  transition: "1s",
}));

const SideBar = () => {
  const currentSection2Part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);

  const dispatch = useDispatch();

  const eventHandler = async (s, p = 0) => {
    // dispatch(
    //   selectResume({
    //     active: false,
    //     index: undefined,
    //     bodyWidth: undefined,
    //     resumeWidth: undefined,
    //     resumeLeftPosition: undefined,
    //   })
    // );
    if (currentSection === s && currentSection2Part === p) return;
    if ((currentSection !== 2 || currentSection === 1) && s === 2) {
      dispatch(sectionIndex(s));
      dispatch(currentPart(-currentSection2Part + p));
      return;
    }
    if (currentSection === 2) dispatch(currentPart(-currentSection2Part + p));
    if (currentSection === 2 && s === 2) return;
    if (currentSection === 3 && s === 3) return;
    dispatch(sectionIndex(s));
  };

  return (
    <Box
      style={{
        height: "100vh",
        width: "0vw",
        position: "fixed",
        zIndex: "99999",
        right: "0%",
      }}
    >
      <Box
        id="sidebar"
        sx={{
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translateY(-50%)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            width: 56,
            minHeight: "100px",
            height: "fit-content",
            pt: 2,
            pb: 2,
          },
        }}
      >
        <Side
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "16px 0 0 16px",
            flexDirection: "column",
            gap: "5px",
            // color: "white",
          }}
          elevation={5}
        >
          <IconButton onClick={() => eventHandler(1)}>
            <KeyboardDoubleArrowUpOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 0)}>
            <img width="30" height="30" src="/us.svg" alt="US flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 1)}>
            <img width="30" height="30" src="/fr.svg" alt="FR flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 2)}>
            <img width="30" height="30" src="/ca.svg" alt="CA flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(3, 3)}>
            <ForumIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              eventHandler(4);
            }}
          >
            <KeyboardDoubleArrowDownOutlinedIcon />
          </IconButton>
        </Side>
      </Box>
    </Box>
  );
};

export default memo(SideBar);
