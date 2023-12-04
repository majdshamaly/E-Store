import React, { useState, useRef } from "react";

const Login = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  //   const handleUsernameChange = () => {
  //     setUsername(usernameRef.current.value);
  //   };

  //   const handlePasswordChange = () => {
  //     setPassword(passwordRef.current.value);
  //   };

  //   const handleEmailChange = () => {
  //     setEmail(emailRef.current.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameRef = usernameRef.current.value;
    const passwordRef = passwordRef.current.value;
    const email = emailRef.current.value;
    // Add client-side validation
    if (!username) {
      setUsernameError("Please enter a username");
      return;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Please enter a password");
      return;
    } else {
      setPasswordError("");
    }
    if (!email) {
      setEmailError("Please enter an email address");
      return;
    } else {
      setEmailError("");
    }
    // Add code to submit the form data to the server and handle the response
  };

  return (
    <div className="login-container vh-100 ">
      <h1 className="text-center py-5">Login</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={usernameRef} />
            {usernameError && (
              <div className="error-message">{usernameError}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} />
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
