import React, { useState } from 'react';
import './ProfilePage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [address, setAddress] = useState('123 Street, City');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      setPasswordError('Please enter the correct password.');
      return;
    }

    // Perform the necessary actions to save the changes
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('Password:', password);

    toast.success('Changes saved successfully', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const validatePhoneNumber = (number) => {
    if (number.length !== 10) {
      setPhoneError('Please enter a 10-digit phone number.');
    } else {
      setPhoneError('');
    }
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <label htmlFor="name">Name:</label>
      {isEditing ? (
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p>{name}</p>
      )}

      <label htmlFor="phoneNumber">Phone Number:</label>
      {isEditing ? (
        <>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={(e) => validatePhoneNumber(e.target.value)}
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </>
      ) : (
        <p>{phoneNumber}</p>
      )}

      <label htmlFor="address">Address:</label>
      {isEditing ? (
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      ) : (
        <p>{address}</p>
      )}

      {passwordError && <p className="error-message">{passwordError}</p>}

      {isEditing ? (
        <>
          <label htmlFor="password">Change Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      ) : null}

      {isEditing ? (
        <button onClick={handleSaveChanges}>Save Changes</button>
      ) : (
        <button onClick={handleEditProfile}>Edit Profile</button>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
