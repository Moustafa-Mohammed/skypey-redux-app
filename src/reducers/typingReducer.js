import { SET_TYPING_VALUE } from "../actions/constants/actionTypes.js.js";
const typing = (state = "", action) => {
  if (action.type === SET_TYPING_VALUE) {
    return action.payload;
  }
  return state;
};

export default typing;
