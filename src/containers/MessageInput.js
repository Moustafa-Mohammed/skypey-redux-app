import React from "react";
import { store } from "../store";
import { setTypingValueAction, sendMessageAction } from "../actions";

import "./MessageInput.css";

function MessageInput() {
  const { typing, activeUserId } = store.getState();
  const handleChange = (e) => {
    store.dispatch(setTypingValueAction(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(sendMessageAction(typing, activeUserId));
    store.dispatch(setTypingValueAction(""));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        placeholder="Type a message..."
        value={typing}
        onChange={handleChange}
      />
    </form>
  );
}

export default MessageInput;
