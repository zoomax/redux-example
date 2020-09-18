import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./reducers";
const middleware = [thunk];
const initialState = {};
const store = createStore(
  appReducer,
  initialState,
  compose(applyMiddleware(...middleware) , 
  window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
