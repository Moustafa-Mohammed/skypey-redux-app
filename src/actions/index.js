import { SET_ACTIVE_USER_ID } from "./constants/actionTypes.js";

export const setActiveUserId = (id) => {
  return {
    type: SET_ACTIVE_USER_ID,
    payload: id,
  };
};
