import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import PetList from './screens/PetList/PetList';
import AnimalDisplay from './screens/AnimalDisplay/AnimalDisplay';
import Footer from './components/Footer/Footer'; 
import Login from'./components/Login/Login';
import SignUp from './components/SignUp/SignUp'

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets' element={<PetList />} />
        <Route path='/pets/:animal' element={<AnimalDisplay />} />
        <Route path="/login" element={<Login / >} />
        <Route path="/signup" element={<SignUp / >} />
      </Routes>

      <Footer /> 
    </div>
  );
};

export default App;