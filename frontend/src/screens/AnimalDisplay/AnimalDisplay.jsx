import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  dog_list,
  cat_list,
  rabbit_list,
  bird_list,
} from '../../assets/assets';
import './AnimalDisplay.css';

const AnimalDisplay = () => {
  const { animal } = useParams();
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  let petData = [];
  if (animal === 'dogs') petData = dog_list;
  else if (animal === 'cats') petData = cat_list;
  else if (animal === 'rabbits') petData = rabbit_list;
  else if (animal === 'birds') petData = bird_list;

  const toggleFavourite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowForm(true);
    setThankYou(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setThankYou(true);
    setFormData({ name: '', email: '', phone: '', city: '' });
    setTimeout(() => setThankYou(false), 3000);
  };

  return (
    <div className="animal-display">
      <h2 className="line">{animal.toUpperCase()} Available for Adoption</h2>
      <p className="info-line">Pets shown here are rescued from streets</p>

      <div className="pet-grid">
        {petData.map((pet) => (
          <div key={pet._id} className="pet-card">
            <img src={pet.image} alt={animal} />

            <p>
              {animal === 'birds'
                ? `Type: ${pet.Type || 'Unknown'}`
                : `Breed: ${pet.breed || 'Unknown'}`}
            </p>
            <p>Age: {pet.age || 'Unknown'}</p>
            <p>City: {pet.City || 'Unknown'}</p>

            <button className="fav-btn" onClick={() => toggleFavourite(pet._id)}>
              {favorites.includes(pet._id) ? '❤' : '🤍'} Favourite
            </button>

            <button className="adopt-btn" onClick={() => handleAdoptClick(pet)}>
              🐾 Adopt Me
            </button>
          </div>
        ))}
      </div>

      <div className="back-bottom">
        <button onClick={() => navigate('/pets')} className="back-btn">
          Back
        </button>
      </div>

      {/* Modal Form */}
      {showForm && selectedPet && (
        <div className="modal">
          <div className="form-box">
            <h3>
              Adopt {animal === 'birds' ? selectedPet?.Type : selectedPet?.breed}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Your Phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Your City"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {thankYou && (
        <div className="modal">
          <div className="thankyou-msg">
            🎉 Thank you for your interest! We’ll get in touch shortly.
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalDisplay;