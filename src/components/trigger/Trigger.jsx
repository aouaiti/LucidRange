import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const Trigger = forwardRef((props, ref) => {
  return (
    <Box
      component={motion.div}
      ref={ref}
      {...props}
      style={{
        marginRight: "15rem",
        background: "black",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }}
    />
  );
});
Trigger.displayName = "LazyResume";
export default Trigger;
