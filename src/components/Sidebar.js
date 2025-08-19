import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // Import the local image

function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="toggle-btn"
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        {collapsed ? "➡" : "⬅"}
      </button>

      {!collapsed && (
        <>
          <div className="profile">
            <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        style={{ width: 70, height: 70, borderRadius: "50%" }}
      />
            <p className="name">Masrafi Iqbal</p>
          </div>
          <nav>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Profile
            </Link>
            <Link
              to="/articles"
              className={location.pathname === "/articles" ? "active" : ""}
            >
              My Articles
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}

export default Sidebar;
