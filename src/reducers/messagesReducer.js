import { SEND_MESSAGE } from "../actions/constants/actionTypes.js";
import { getMessages } from "../static-data";

const messagesReducer = (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +Object.keys(allUserMsgs).pop();
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          },
        },
      };
    default:
      return state;
  }
};

export default messagesReducer;
