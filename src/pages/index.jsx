// src/pages/index.js
import React from "react";
import { Box } from "@chakra-ui/react";
import Menubar from "../components/menubar";
import IntroPage from "../sections/intro";

const IndexPage = () => {
  return (
    <Box>
      <IntroPage />
      <Menubar />
    </Box>
  );
};

export default IndexPage;
