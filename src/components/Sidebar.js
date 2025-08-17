import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; 

function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="toggle-btn"
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
        style={{ width: 220, height: 220, borderRadius: "50%" }}
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
          </nav>
        </>
      )}
    </div>
  );
}

export default Sidebar;
