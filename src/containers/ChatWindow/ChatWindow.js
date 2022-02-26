import React from "react";
import { store } from "../../store";
import Header from "../../components/Header/Header";
const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  return (
    <div className="ChatWindow">
      <Header activeUser={activeUser} />
    </div>
  );
};
export default ChatWindow;
