// ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.css';
import defaultProfilePic from './profbg.jpg';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Chamodya Ruvishan',
    age: 24,
    weight: 60, // in kg
    height: 180, // in cm
    picture: defaultProfilePic,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, picture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    // You can add logic to save changes to a database here
    alert('Profile updated!');
  };

  return (
<div className='profile-page'>
    <div className="profile-container">
   
    <h1>Profile Page</h1>
      {profile.picture && <img src={profile.picture} alt="Profile" className="profile-picture" />}
      {isEditing ? (
        <input type="file" accept="image/*" onChange={handlePictureChange} />
      ) : null}
      <div className="profile-details">
        {isEditing ? (
          <>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
              />
            </label>
            <label>
              Weight (kg):
              <input
                type="number"
                name="weight"
                value={profile.weight}
                onChange={handleChange}
              />
            </label>
            <label>
              Height (cm):
              <input
                type="number"
                name="height"
                value={profile.height}
                onChange={handleChange}
              />
            </label>
            <button onClick={saveChanges}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Weight:</strong> {profile.weight} kg</p>
            <p><strong>Height:</strong> {profile.height} cm</p>
            <button onClick={toggleEdit}>Edit Profile</button>
          </>
        )}
      </div>
      
    </div>
    </div>
  );
};

export default ProfilePage;
