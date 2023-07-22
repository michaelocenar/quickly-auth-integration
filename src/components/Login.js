import React, { useState } from "react";
import axios from 'axios';
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    return validator.isEmail(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }
    
    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/login', { email, password });
      // if POST request is successful, response will have user data and a JWT token
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.jwtToken);
      alert("Login successful!");
    } catch (error) {
      console.error("An error has occurred during login", error);  
      alert("Login failed");
    }
  }

 

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;