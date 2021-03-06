import React from "react";
import { store } from "../../store";
import Header from "../../components/Header/Header";
import Chats from "../chats/Chats";

import "./ChatWindow.css";
import MessageInput from "../MessageInput";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header activeUser={activeUser} />
      <Chats activeMessages={activeMessages} />
      <MessageInput />
    </div>
  );
};
export default ChatWindow;
