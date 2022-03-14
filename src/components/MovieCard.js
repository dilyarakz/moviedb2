import React, { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';
// import { StarIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { getMovie, getRecom, addFav, removeFav } from '../Actions/MoviesServer';
import { Box } from '@chakra-ui/react'


const MovieCard = (props) => {

  return (
    <Box id="movieCard" m={2} borderRadius='lg' h={props.height} w={props.width}>
      Card
    </Box>

  )
}



export default MovieCard;