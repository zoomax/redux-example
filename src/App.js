import React from "react";
import {Provider} from  "react-redux"
// import {createStore , applyMiddleware} from "redux"  ;  
import Posts from "./components/posts";
import "./App.css";
// import appReducer from "./reducers" ; 
import PostForm from "./components/postForm"
import store from "./store" ; 

function App() {
  return (
    <Provider store ={store} > 
    <div className="App">
      
      <PostForm />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
