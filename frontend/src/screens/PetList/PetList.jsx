import React from 'react';
import { animal_list } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import './PetList.css';

const PetList = () => {
  const navigate = useNavigate();

  return (
    <div className="petlist">
      <h2>Browse by Pet Type</h2>

      <div className="animal-card-container">
        {animal_list.map((animal, index) => (
          <div
            key={index}
            className="animal-card"
            onClick={() => navigate(`/pets/${animal.animal_name.toLowerCase()}`)}
          >
            <img src={animal.animal_image} alt={animal.animal_name} />
            <p>{animal.animal_name}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">← Home</Link>
    </div>
  );
};

export default PetList;