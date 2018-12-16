import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";

const AuthInitialState = {
  isAuthenticated: false,
  user: {}
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
