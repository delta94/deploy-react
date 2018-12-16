import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import ErrorReducer from "./errorReducer";
import ProfileReducer from "./profileReducer";
import PostReducer from "./postReducer";

export default combineReducers({
    auth: AuthReducer,
    errors: ErrorReducer,
    profile: ProfileReducer,
    post: PostReducer
})