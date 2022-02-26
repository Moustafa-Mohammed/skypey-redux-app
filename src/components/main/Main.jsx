import React from "react";
import ChatWindow from "../../containers/ChatWindow/ChatWindow";
import Empty from "../Empty/Empty";
import "./main.css";

function Main({ user, activeUserId }) {
  const renderMainContent = () => {
    return !activeUserId ? (
      <Empty user={user} activeUserId={activeUserId} />
    ) : (
      <ChatWindow activeUserId={activeUserId} />
    );
  };
  return <main className="main">{renderMainContent()}</main>;
}

export default Main;
