import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_RPOFILE,
  GET_PROFILES
} from "../actions/types";

const InitialState = {
  profile: null,
  profiles: null,
  loading: false
};
const ProfileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case GET_PROFILES:
      return { ...state, profiles: action.payload, loading: false };
    case CLEAR_CURRENT_RPOFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
};

export default ProfileReducer;
