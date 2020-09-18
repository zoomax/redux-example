import axios from "axios";
import types from "./types";
export function getPosts() {
    return (dispatch) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.data;
        })
        .then((posts) =>
          dispatch({
            type: types.GET_POSTS,
            payload: posts,
          })
        );
    };
  }
  export function createPost(post) {
    return (dispatch) => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts" , post)
        .then((res) => {
          return res.data;
        })
        .then((payload) =>
          dispatch({
            type: types.CREATE_POST,
            payload
          })
        );
    };
  }
  
  