import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
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

    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/signup', {
        first_name: firstName,
        last_name: lastName,
        email,
        password, 
        company: {
          name: company
        }
      });
      // if POST request is successful, response will have user data and a JWT token
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.jwtToken);
    } catch (error) {
        console.error('An error has occurred during signup', error);
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
        Confirm Password:
        <input type="password" name="passwordConfirm" onChange={e => setPasswordConfirm(e.target.value)} required/>
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