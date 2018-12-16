import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootRuducer from "./reducers/index";

const InitialState = {};

const middleware = [thunk];

const store = createStore(
  rootRuducer,
  InitialState,
  compose(
    applyMiddleware(...middleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
