import { GET_GENRES } from "../Actions/types";

const initialState = {};

export default function getGenresReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      }
    default:
      return state
  }
}