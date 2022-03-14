import axios from "axios";
import { GET_MOVIES } from "./types"


const API_KEY = process.env.REACT_APP_API_KEY;
const API_LINK = "https://api.themoviedb.org/3/";


export const getMovies = () => async dispatch => {

  const res = await axios.get(`${API_LINK}movie/top_rated?api_key=${API_KEY}`);
  dispatch({
    type: GET_MOVIES,
    payload: res.data.results
  });
  return res.data.results;
};