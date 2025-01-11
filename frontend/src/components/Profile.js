import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const res = await axios.get('/api/users/profile');
      setUser(res.data);
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
