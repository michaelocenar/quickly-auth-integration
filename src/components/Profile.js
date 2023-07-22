import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://api-dev.quicklyinc.com/auth/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user', error);
        alert('Failed to fetch user');
      }
    };

    fetchUser();
  }, []);

  if (!user) return <h1>401: Unauthorized</h1>;

  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

export default Profile;