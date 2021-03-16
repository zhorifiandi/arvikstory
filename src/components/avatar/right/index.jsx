import React from "react";
import { Box, Image } from "@chakra-ui/react";

const RightAvatar = () => {
  return (
    <Box>
      <picture
        style={{
          borderRadius: "80% 80% 80% 32px",
          marginBottom: ".75rem",
          width: "100px",
          minWidth: "100px",
          height: "100px",
          border: "4px solid #fff",
          display: "block",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src="/second-person-couple.jpg" />
      </picture>
    </Box>
  );
};

export default RightAvatar;
