import { combineReducers } from "redux";
import getMoviesReducer from "./moviesReducer"



export default combineReducers({
  movies: getMoviesReducer
});