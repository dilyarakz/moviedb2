import React, { useEffect, useState } from 'react';
import { Button, Input, Container, Flex, Box, WrapItem, Center } from '@chakra-ui/react'
import { getMovies, searchMovies, getGenres } from '../Actions/MoviesServer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import MovieItemCard from './MovieItemCard';
import ReactPaginate from 'react-paginate';
import { SearchIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"


const defaultProps = {};

const PER_PAGE = 5;

const Home = (props) => {

  const [movieData, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [allGenres, setAllGenres] = useState({})

  useEffect(() => {
    props.getMovies().then(m => setMovies(m))
    props.getGenres().then(g => setAllGenres(g))
  }, [])

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(movieData.length / PER_PAGE);

  function handleInput() {
    if (searchQuery.length > 1) {
      props.searchMovies(searchQuery)
        .then(m => setMovies(m))
    }
    setSearchQuery('');
  }

  function getGenreNames(allGenres, res) {
    const gNames = []
    if (allGenres.hasOwnProperty('genres')) {
      allGenres.genres.map(genre => {
        if (res.hasOwnProperty("genre_ids")) {
          res.genre_ids.map(id => {
            if (Number(id) === Number(genre.id)) {
              if (gNames.indexOf(genre.name) === -1) {
                gNames.push(genre)
              }
            }
          })
        }
      })
    }
    return gNames;
  }



  return (
    <div>
      <Box bg="#747474" p='10'>
        <Flex p='10' align='center' justifyContent='center' alignItems='center'>
          <Input
            id="searchInput"
            width='70%'
            bg='white'
            placeholder='Search for movie here'
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          /><Button
            bg='#FFE400'
            onClick={() => handleInput()}
          ><SearchIcon /></Button>
        </Flex>
      </Box>

      <Container p={20} maxW='container.x1' >
        <Flex style={{ overflowY: "hidden", hight: "70%" }}>
          {
            movieData.slice(offset, offset + PER_PAGE)
              .map((res, index) => {
                if (typeof res !== 'undefined') {
                  return (
                    <WrapItem key={res.id}>
                      <Center key={res.id}>
                        <MovieItemCard key={res.id} movie={res} width={400} height={700} genre={getGenreNames(allGenres, res)} />
                      </Center>
                    </WrapItem>
                  )
                }
              })
          }
        </Flex>
        <Box p={10} className="pagination-container">
          <ReactPaginate
            previousLabel={<ArrowLeftIcon />}
            nextLabel={<ArrowRightIcon />}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </Box>
      </Container>
    </div>
  );
}

Home.propTypes = {
  getMovies: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
}
Home.defaultProps = defaultProps;

export default connect(
  null,
  { getMovies, searchMovies, getGenres }
)(Home);