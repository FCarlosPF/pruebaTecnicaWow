import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <button className="home-button" onClick={() => handleNavigate('/todos')}>Ver Tareas</button>
      <button className="home-button" onClick={() => handleNavigate('/users')}>Ver Usuarios</button>
    </div>
  );
};

export default Home;