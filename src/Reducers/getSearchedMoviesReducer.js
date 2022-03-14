import { GET_SEARCH_MOVIES } from "../Actions/types";

const initialState = {};

export default function getSearchedMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state
  }
}