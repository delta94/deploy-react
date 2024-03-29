import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const InitialState = {};
const ErrorReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorReducer;
