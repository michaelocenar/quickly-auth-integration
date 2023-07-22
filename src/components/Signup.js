import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    return validator.isEmail(email);
  }

  return (
    <form>
  
    </form>
  );
}

export default Signup;