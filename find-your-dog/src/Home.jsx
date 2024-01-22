import React from 'react';
import Logo from './assets/images/Find_your_dog_logo.png';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div>
        <div className='navBar'>
            <img src={Logo} alt="" />
            <Link to="/mapa">Mapa</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/social">Social</Link>
            <button>Ingresá</button>
        </div>
        <div className='title'>
            <h1>Encontrá a tu mascota,<br/>no importa dónde esté.</h1>
        </div>
        <div className='content'>
          <div className='box'>
            <p>Contenido de la caja 1</p>
            <p>Más contenido de la caja 1</p>
          </div>
          <div className='box'>
            <p>Contenido de la caja 2</p>
            <p>Más contenido de la caja 2</p>
          </div>
          <div className='box'>
            <p>Contenido de la caja 3</p>
            <p>Más contenido de la caja 3</p>
          </div>
        </div>
    </div>
  );
};

export default Home;