import React from "react";
import "./ChatWindow.css";

function ChatWindow({ activeUserId }) {
  return (
    <div className="ChatWindow">Conversation for user id: {activeUserId}</div>
  );
}

export default ChatWindow;
