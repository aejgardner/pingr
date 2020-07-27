import { createStore, applyMiddleware, compose } from "redux";
import initial from "./initial";
import reducer from "./reducers";
import thunk from "redux-thunk";

// setup redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store set up
const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;