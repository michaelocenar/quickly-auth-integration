import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [company, setCompany] = useState('');

  const validateEmail = (email) => {
    return validator.isEmail(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    const user = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "company": {
        "name": company
      }
    };

    console.log('Sending the following JSON object to the server:', user);

    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/signup', user);
      // if POST request is successful, response will have user data and a JWT token
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.jwtToken);
    } catch (error) {
      console.error('An error has occurred during signup', error);
      if (error.response) {
        console.log('Server Response', error.response.data);
      }
      alert('Signup not successful');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" name="first_name" onChange={e => setFirstName(e.target.value)} required/>
      </label>
      <label>
        Last name:
        <input type="text" name="last_name" onChange={e => setLastName(e.target.value)} required/>
      </label>  
      <label>
        Email:
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} required/>
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} required/>
      </label>
      <label>
        Company Name:
        <input type="text" name="company" onChange={e => setCompany(e.target.value)} required/>
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default Signup;
