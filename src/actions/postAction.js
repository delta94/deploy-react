import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  GET_POST,
  CLEAR_ERRORS
} from "./types";

const HTTP = "https://react-ngodat97.herokuapp.com";


// add post
export const addPost = postData => dispatch => {
  dispatch(clearErros());

  axios
    .post(HTTP + "/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// get posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(HTTP + "/api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_POSTS,
        payload: null
      });
    });
};

// get post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(HTTP + `/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_POST,
        payload: null
      });
    });
};

//delete post
export const deletePost = id => dispatch => {
  axios
    .delete(HTTP + `/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// add like
export const addLike = id => dispatch => {
  axios
    .post(HTTP + `/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// add comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErros());
  axios
    .post(HTTP + `/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// delete comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(HTTP + `/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// remove like
export const removeLike = id => dispatch => {
  axios
    .post(HTTP + `/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// clear errors
export const clearErros = () => {
  return {
    type: CLEAR_ERRORS
  };
};
