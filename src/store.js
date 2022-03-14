import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initalState,
  composeEnhancers(applyMiddleware(thunk))
);



store.subscribe(() => {
  // localStorage.setItem('fmovie', JSON.stringify(store.getState().fmovies))
  console.log(store.getState())
})

export default store;