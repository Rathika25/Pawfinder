import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <span className="close-button" onClick={handleClose}>×</span>

        {!loggedIn ? (
          <>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p className="login-text">
              Don’t have an account? <span className="login-link" onClick={() => window.location.href = '/signup'}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <p className="success-msg">Login successful</p>
            <p className="welcome-msg">Welcome back to PawFinder 🐶</p>
            <button onClick={handleClose}>Go to Home</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;