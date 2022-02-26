import React from "react";
import { setActiveUserId } from "../../actions";
import { store } from "../../store";
import "./User.css";

function User({ user }) {
  const { name, profile_pic, status, user_id } = user;
  return (
    <div
      className="user"
      onClick={() => store.dispatch(setActiveUserId(user_id))}
    >
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
}

export default User;
