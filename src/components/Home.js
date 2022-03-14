import React, { useEffect, useState } from 'react';
import { Flex, WrapItem } from '@chakra-ui/react'
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getMovies } from '../actions/moviesServer';


const Home = (props) => {

  const [movieData, setMovies] = useState([]);

  useEffect(() => {
    props.getMovies().then(m => setMovies(m))
  }, [])

  return (
    <div>
      <Flex style={{ overflowY: "hidden", hight: "70%" }}>
        {
          movieData
            .map((res) => {
              if (typeof res !== 'undefined') {
                return (
                  <WrapItem key={res.id}>
                    <MovieCard
                      key={res.id}
                      movie={res}
                      width={400}
                      height={700} />
                  </WrapItem>
                )
              }
            })
        }
      </Flex>

    </div>);
}

Home.propTypes = {

  getMovies: PropTypes.func.isRequired,

}



export default connect(
  null,
  { getMovies }
)(Home);