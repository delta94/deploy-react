import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

const HTTP = "https://react-ngodat97.herokuapp.com";

// Register User
export const registeruser = (userData, history) => dispatch => {
  axios
    .post(HTTP + "/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get token
export const loginUser = userData => dispatch => {
  axios
    .post(HTTP + "/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Logout
export const logoutUser = () => dispatch => {
  //remove token
  localStorage.removeItem("jwtToken");
  //remove auth headers
  setAuthToken(false);
  // ser current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
