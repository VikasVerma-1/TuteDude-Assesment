import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const res = await axios.get('/api/friends/recommendations');
      setRecommendations(res.data);
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h3>Friend Recommendations</h3>
      {recommendations.map((user) => (
        <p key={user._id}>{user.username}</p>
      ))}
    </div>
  );
};

export default FriendRecommendations;
