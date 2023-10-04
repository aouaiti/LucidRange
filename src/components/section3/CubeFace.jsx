import { memo } from "react";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import Image from "next/image";

const CubeFace = ({ who, desc, msg, rate, url, ...props }) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div">
          {who}
        </Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          {desc}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr style={{ width: "90%", position: "absolute" }} />
        <img
          src={url}
          alt="review"
          width="100"
          height="100"
          style={{ borderRadius: "50%", transform: "translateZ(10px)" }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          {msg}
        </Typography>
        <Rating name="read-only" value={rate} readOnly />
      </Box>
    </Box>
  );
};

export default memo(CubeFace);
