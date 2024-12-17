import React, { useState } from "react";

const Profile = ({ username, setUsername, avatarUrl, setAvatarUrl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newAvatarUrl, setNewAvatarUrl] = useState(avatarUrl);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUsername(newUsername);
    setAvatarUrl(newAvatarUrl);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="avatar">
          <img src={avatarUrl} alt="Avatar" />
        </div>
        <h2>{username}</h2>
        <button onClick={handleEditClick}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing && (
        <div className="edit-form">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Avatar URL:</label>
            <input
              type="text"
              value={newAvatarUrl}
              onChange={(e) => setNewAvatarUrl(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
