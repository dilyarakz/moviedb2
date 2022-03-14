import { GET_MOVIES } from "../actions/types";


const initialState = {};


export default function getMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state
  }
}