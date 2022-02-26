import { combineReducers } from "redux";
import contacts from "./contactsReducer";
import user from "./userReducer";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  contacts,
  activeUserId,
});
