import React, { useState, useRef } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleUsernameChange = () => {
    setUsername(usernameRef.current.value);
  };

  const handlePasswordChange = () => {
    setPassword(passwordRef.current.value);
  };

  const handleEmailChange = () => {
    setEmail(emailRef.current.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add client-side validation
    if (!username) {
      setUsernameError('Please enter a username');
      return;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Please enter a password');
      return;
    } else {
      setPasswordError('');
    }
    if (!email) {
      setEmailError('Please enter an email address');
      return;
    } else {
      setEmailError('');
    }
    // Add code to submit the form data to the server and handle the response
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
