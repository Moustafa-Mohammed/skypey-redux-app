import React from "react";
import "./sidebar.css";
import User from "../../containers/User/User";

function Sidebar({ contacts }) {
  return (
    <aside className="sidebar">
      {Object.values(contacts).map((contact) => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
}

export default Sidebar;
