import React from "react";
import { Box } from "@chakra-ui/react";

const MarbleBackground = ({ children }) => {
  return (
    <Box
      position="relative"
      bg="url('/marble.jpg')"
      _before={{
        content: '""',
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.3)",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      }}
    >
      {children}
    </Box>
  );
};

export default MarbleBackground;
