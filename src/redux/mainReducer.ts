import {combineReducers} from "redux";
import groups from "./groups";
import photos from "./photos";

export default combineReducers({
    groups, 
    photos
});
