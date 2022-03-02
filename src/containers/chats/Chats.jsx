import React from "react";
import "./Chats.css";

function Chat({ message }) {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
}

function Chats({ activeMessages }) {
  return (
    <div className="Chats">
      {Object.values(activeMessages).map((message) => (
        <Chat key={message.number} message={message} />
      ))}
    </div>
  );
}

export default Chats;
