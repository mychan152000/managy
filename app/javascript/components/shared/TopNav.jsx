import React from "react";
import SignOutButton from "../dashboard/SignOutButton";
import { Link } from "react-router-dom";

const TopNav = () => (
  <nav>
    <ul>
      <li className="boards trello-icon icon">
        <Link to={'/'}><span>Boards</span></Link>
      </li>
      <li className="search-container">
        <div className="search search-icon icon"></div>
        <div className="active-search">
          <div>
            <input type="text" />
          </div>
          <i className="x-icon icon"></i>
          <i className="goto-icon icon"></i>
        </div>
      </li>
    </ul>
    <h1>Managy</h1>
    <ul className="user-info">
      <li className="create-icon icon"></li>
      <li className="split-button-1">VR</li>
      { localStorage.getItem("user.email") && <li className="split-button-2">{localStorage.getItem("user.email")}</li>}
      <li className="info-icon icon"></li>
      <li className="notifications-icon icon"></li>
      { localStorage.getItem("token") && <li className="split-button-2"><SignOutButton/></li>}
    </ul>
  </nav>
);

export default TopNav;
