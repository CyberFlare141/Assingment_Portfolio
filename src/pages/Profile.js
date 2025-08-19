import React from "react";
import profilePic from "../assets/profile.jpg";

function Profile() {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        style={{ width: 220, height: 220, borderRadius: "50%" }}
      />
      <h2>Masrafi Iqbal</h2>
      <p>Email: masrafi@gmail.com</p>
      <p>Institute:Ahsanullah University of science and technology</p>
      <p>Department: CSE </p>
      <p>Date Joined: January 15, 2024</p>
    </div>
  );
}

export default Profile;
