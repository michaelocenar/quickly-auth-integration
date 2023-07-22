import React, { useState } from "react";
import axios from 'axios';
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    return validator.isEmail(email);
  }

  
  return (
    <form>
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