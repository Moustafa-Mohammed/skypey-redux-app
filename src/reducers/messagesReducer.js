import { getMessages } from "../static-data";

const messagesReducer = (state = getMessages(10), action) => {
  return state;
};

export default messagesReducer;
