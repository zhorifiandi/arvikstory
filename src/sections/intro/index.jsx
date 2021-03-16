import React from "react";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LeftAvatar from "../../components/avatar/left";
import RightAvatar from "../../components/avatar/right";
import MarbleBackground from "../../components/background/marble";

const FirstPersonCouple = () => {
  return (
    <Flex alignItems="center" w="85vw">
      <RightAvatar />
      <Box p="0.2rem">
        <Heading as="h1" fontSize={{ base: "25pt", md: "60pt", lg: "70pt" }}>
          Ari P. Zhorifiandi
        </Heading>
        <Box p="0.5rem">
          <Text color="gray.600" fontSize="xs">
            Putra pertama dari
          </Text>
          <Text color="gray.600" fontSize="xs" fontWeight="600">
            Bapak Ir. Heru Timuryanto & <br />
            Ibu Ir. Erni Rahimi
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

const SecondPersonCouple = () => {
  return (
    <Flex alignItems="center" w="85vw">
      <Box p="0.2rem">
        <Heading as="h1" fontSize={{ base: "25pt", md: "60pt", lg: "70pt" }}>
          Vikih Kusuma W.
        </Heading>
        <Box p="0.5rem">
          <Text color="gray.600" fontSize="xs">
            Putri kedua dari
          </Text>
          <Text color="gray.600" fontSize="xs" fontWeight="600">
            Bapak Iptu Sriyanto Nugroho & <br />
            Ibu Jejeh Siti Jenab, S.Pd.
          </Text>
        </Box>
      </Box>
      <LeftAvatar />
    </Flex>
  );
};

const IntroPage = () => {
  return (
    <section id="#intro">
      <MarbleBackground>
        <Flex justifyContent="center" color="gold" h="90vh" position="relative">
          <Box p="5rem 0">
            <Text as="h2" textAlign="center" fontSize="23pt" fontWeight="900">
              THE WEDDING OF
            </Text>
            <Divider borderColor="gold" />
            <Box p="1rem 0">
              <FirstPersonCouple />
              <Heading
                as="h1"
                fontSize="60pt"
                textAlign="center"
                lineHeight="0.8"
              >
                &
              </Heading>
              <SecondPersonCouple />
            </Box>
            <Text textAlign="center" fontSize="xs">
              SABTU, 22 MEI 2021
            </Text>
          </Box>
          <Image
            src="/flower-left.png"
            position="absolute"
            width={{ base: "25vw", md: "20vw" }}
            left="0"
            bottom="0"
          />
          <Image
            src="/flower-right.png"
            position="absolute"
            width={{ base: "25vw", md: "20vw" }}
            right="0"
            bottom="0"
          />
        </Flex>
      </MarbleBackground>
    </section>
  );
};

export default IntroPage;
