import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SignUp from '../SignUp/SignUp';

const Header = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="header">
      <h1 className="heading">Every paw has a story. Start yours by adopting today! 🐾</h1>

      <div className="signup-button">
        <button onClick={() => setShowModal(true)}>Sign Up</button>
      </div>

      <div className="header-contents">
        <h2>Find Your Furry Friend here!</h2>
        <button onClick={() => navigate('/pets')}>View List :)</button>
      </div>

      {showModal && <SignUp onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Header;
