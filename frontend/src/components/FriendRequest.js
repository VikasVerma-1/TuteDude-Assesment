import React, { useState } from 'react';
import axios from 'axios';

const FriendRequest = ({ userId }) => {
  const [status, setStatus] = useState('');

  const sendRequest = async () => {
    try {
      await axios.post('/api/friends/send', { userId });
      setStatus('Request Sent');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {status ? (
        <p>{status}</p>
      ) : (
        <button onClick={sendRequest}>Send Friend Request</button>
      )}
    </div>
  );
};

export default FriendRequest;
