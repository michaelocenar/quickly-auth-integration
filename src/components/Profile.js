import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://api-dev.quicklyinc.com/auth/user', {
          headers: { Authorization: `Bearer ${token}` }
        })

      } catch (error) {

      }
    }; 


  })


  return (
    <div>

    </div>
  );
}

export default Profile;