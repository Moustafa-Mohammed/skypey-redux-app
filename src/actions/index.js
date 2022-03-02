import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
} from "./constants/actionTypes.js";

export const setActiveUserIdAction = (id) => {
  return {
    type: SET_ACTIVE_USER_ID,
    payload: id,
  };
};

export const setTypingValueAction = (inputVal) => {
  return {
    type: SET_TYPING_VALUE,
    payload: inputVal,
  };
};

export const sendMessageAction = (message, userId) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      message,
      userId,
    },
  };
};
