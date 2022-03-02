import { combineReducers } from "redux";
import contacts from "./contactsReducer";
import user from "./userReducer";
import activeUserId from "./activeUserId";
import messages from "./messagesReducer";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
});
