import React, { useState } from 'react';
import './SignUp.css';
<Link to="/login">Login</Link>

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignedUp(true);
  };

  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <span className="close-button" onClick={handleClose}>×</span>

        {!signedUp ? (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="password" placeholder="Password" required />
              <button type="submit">Create Account</button>
            </form>
            <p className="login-text">
              Already have an account?
              <span className="login-link" onClick={() => window.location.href = '/login'}>Log In</span>
            </p>
          </>
        ) : (
          <>
            <p className="success-msg">Account created successfully!</p>
            <div className="profile">
              <p>Welcome to PawFinder 🐶</p>
              <button onClick={handleClose}>Go to Home</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;