import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const Header = (props) => {
  return (
    <Flex>
      <Flex align="center" mr={5}>
        <Link id="header-icon" to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            MovieDB
           </Heading>
        </Link>
      </Flex>

      <Box >
        <Link className="header-fav-box-link" to="/">
          <Text style={{ marginRight: "0.7rem" }}>Favourite </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path id="heartIcon" fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
