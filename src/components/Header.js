import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <Flex>
      <Flex align="center" mr={5}>

        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          MovieDB
           </Heading>

      </Flex>

      <Box >
        <Link className="header-fav-box-link" to="/">
          <Text style={{ marginRight: "0.7rem" }}>Favourite </Text>

        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
