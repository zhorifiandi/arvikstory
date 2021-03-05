// src/pages/index.js
import React from "react"
// import { ChakraProvider } from "@chakra-ui/react"
// import theme from "../configs/theme"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"


function IndexPage() {
  return (
    // <ChakraProvider theme={theme}>
      <Flex 
        alignItems="center" 
        justifyContent="center"
        bg="#F4C7B4" color="#C49666" h="100vh">
        <Box textAlign="center">
          <Text fontSize="md">THE WEDDING OF</Text>
          <Heading p="1rem 0" as="h1" fontSize={{ base: "30pt", md: "40pt", lg: "50pt" }}>
            Vikih & Ari
          </Heading>
          <Text fontSize="md">SABTU, 22 MEI 2021</Text>
        </Box>
        <Image src="/flower-left.png" position="absolute" width={{ base: "35vw", md: "20vw" }} left="0" bottom="0" />
        <Image src="/flower-right.png" position="absolute" width={{ base: "35vw", md: "20vw" }} right="0" bottom="0" />
      </Flex>
    // </ChakraProvider>
  )
}

export default IndexPage