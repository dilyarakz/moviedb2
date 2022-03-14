import { GET_MOVIE } from "../actions/types";


const initialState = {};


export default function getMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state
  }
}