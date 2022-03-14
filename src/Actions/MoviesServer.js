import axios from "axios";
import { GET_MOVIES, GET_SEARCH_MOVIES, GET_MOVIE, GET_RECOM, ADD_FAV, DEL_FAV, GET_GENRES } from "./types";


const API_KEY = "b203d4344dccb614502bdbfd2b849942";
const API_LINK = "https://api.themoviedb.org/3/";


export const getMovies = () => async dispatch => {
  const res = await axios.get(`${API_LINK}movie/top_rated?api_key=${API_KEY}`);
  dispatch({
    type: GET_MOVIES,
    payload: res.data.results
  });
  return res.data.results;
};


export const searchMovies = (query) => async dispatch => {
  const res = await axios.get(`${API_LINK}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`);
  dispatch({
    type: GET_SEARCH_MOVIES,
    payload: res.data.results
  });
  return res.data.results;
}


export const getMovie = (id) => async dispatch => {
  const res = await axios.get(`${API_LINK}movie/${id}?api_key=${API_KEY}&language=en-US`);
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
  return res.data;
}


export const getRecom = (id) => async dispatch => {
  const res = await axios.get(`${API_LINK}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`);
  dispatch({
    type: GET_RECOM,
    payload: res.data.results
  });
  return res.data.results;
}


export const addFav = (fmovie) => async (dispatch, getState) => {
  dispatch({
    type: ADD_FAV,
    payload: fmovie
  });
}

export const removeFav = (id) => (dispatch, getState) => {
  dispatch({
    type: DEL_FAV,
    payload: id
  })
}


export const getGenres = () => async dispatch => {
  const res = await axios.get(`${API_LINK}genre/movie/list?api_key=${API_KEY}&language=en-US`);
  dispatch({
    type: GET_GENRES,
    payload: res.data
  });
  return res.data;
}