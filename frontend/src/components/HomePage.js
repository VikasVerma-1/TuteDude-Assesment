import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import FriendRequest from './FriendRequest';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <h3>All Users</h3>
      {users.map((otherUser) => (
        <div key={otherUser._id}>
          <p>{otherUser.username}</p>
          <FriendRequest userId={otherUser._id} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
