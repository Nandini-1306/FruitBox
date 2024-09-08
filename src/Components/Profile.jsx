import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfilePageContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1D232A;
  border: 1px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px auto;
`;

const UserInfo = styled.div`
  margin-bottom: 20px;
`;

const SubscriptionDetails = styled.div`
  margin-bottom: 20px;
`;

const Bio = styled.p`
  font-size: 18px;
  color: #666;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
  text-align: center;
`;

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data
    axios.get('http://localhost:3000/user/profile')
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile.</p>;

  return (
    <>
      <Heading>Profile Information</Heading>
      <ProfilePageContainer>
        <ProfilePicture>
          <img src={userData.profilePicture || '/profile.jpeg'} alt="Profile Picture" />
        </ProfilePicture>
        <UserInfo>
          <h2>{userData.userName}</h2>
          <p>Email: {userData.userEmail}</p>
          <p>Phone: {userData.userPhoneNumber}</p>
          <p>Address: {userData.userAddress}</p>
        </UserInfo>
        <SubscriptionDetails>
          <h3>Subscription Details</h3>
          <p>Type: {userData.subscription?.type || 'N/A'}</p>
          <p>Box Size: {userData.subscription?.boxSize || 'N/A'}</p>
          <p>Delivery Day: {userData.subscription?.deliveryDay || 'N/A'}</p>
        </SubscriptionDetails>
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
          Edit Profile
        </button>
      </ProfilePageContainer>
    </>
  );
}

export default Profile;
