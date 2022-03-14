import React, { useEffect, useState } from 'react';
import { Flex, WrapItem } from '@chakra-ui/react'
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from "react-redux";
import { getMovies } from '../actions/moviesServer';
import store from '../store';

const Home = () => {

  const dispatch = useDispatch();
  const [movies, setMovies] = useState([])
  // dispatch(getMovies()).then(m => setMovies(m))

  useEffect(() => {
    dispatch(getMovies()).then(m => setMovies(m))
  }, [])

  // movies.map(m => console.log(m))
  console.log(movies)
  return (
    <div>
      <Flex style={{ overflowY: "hidden", hight: "70%" }}>
        {
          movies.length > 1 && movies.map((res) => {
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


export default Home;