import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { GiLoveLetter } from "react-icons/gi";
import { BsHeartFill, BsDisplayFill, BsFillCalendarFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const IntroMenu = () => {
  return (
    <Box flex="1" color="yellow.50">
      <Link href="#intro">
        <Flex flexDirection="column" alignItems="center" p="0.5rem">
          <Box as={BsHeartFill} size="30px" mb="0.2rem" />
          <Text fontSize="8pt">Invitation</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const EventMenu = () => {
  return (
    <Box flex="1" color="yellow.50">
      <Link href="#blessings">
        <Flex flexDirection="column" alignItems="center" p="0.5rem">
          <Box as={BsFillCalendarFill} size="30px" mb="0.2rem" />
          <Text fontSize="8pt">Event</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const BlessingMenu = () => {
  return (
    <Box flex="1" color="yellow.50">
      <Link href="#blessings">
        <Flex flexDirection="column" alignItems="center" p="0.5rem">
          <Box as={GiLoveLetter} size="30px" mb="0.2rem" />
          <Text fontSize="8pt">Blessings</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const WatchMenu = () => {
  return (
    <Box flex="1" color="yellow.50">
      <Link href="#watch">
        <Flex flexDirection="column" alignItems="center" p="0.5rem">
          <Box as={BsDisplayFill} size="30px" mb="0.2rem" />
          <Text fontSize="8pt">Watch</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const GalleryMenu = () => {
  return (
    <Box flex="1" color="yellow.50">
      <Link href="#gallery">
        <Flex flexDirection="column" alignItems="center" p="0.5rem">
          <Box as={GrInstagram} size="30px" mb="0.2rem" />
          <Text fontSize="8pt">Gallery</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const Menubar = () => {
  return (
    <Flex
      borderRadius="0.5rem"
      bg="gold"
      w="100%"
      position="fixed"
      bottom="0.2rem"
    >
      <IntroMenu />
      <EventMenu />
      <WatchMenu />
      <GalleryMenu />
      <BlessingMenu />
    </Flex>
  );
};

export default Menubar;
