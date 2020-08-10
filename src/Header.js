import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />

        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${searchInput}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationIcon className="header_icon" />
        <Avatar
          alt="Pranav"
          src="https://c.ndtvimg.com/2020-06/d313ccno_ipl-trophy-twitter_625x300_22_June_20.jpg?q=60&imwidth=555"
        />
      </div>
    </div>
  );
}

export default Header;
