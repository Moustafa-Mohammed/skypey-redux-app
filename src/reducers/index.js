import { combineReducers } from "redux";
import contacts from "./contactsReducer";
import user from "./userReducer";

export default combineReducers({
  user,
  contacts,
});
