import React from 'react';
import Logo from './assets/images/Find_your_dog_logo.png';
import Mujer from './assets/images/Perro_mujer.png';
import Veterinario from './assets/images/Veterinario.png';
import Lupa from './assets/images/Lupa.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
        <div className='navBar'>
            <img src={Logo} alt="Logo Find Your Dog" />
            <Link to="/mapa">Mapa</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/social">Social</Link>
            <button>Ingresá</button>
        </div>
        <div className='title'>
            <h1>Encontrá a tu mascota,<br/>no importa dónde esté.</h1>
        </div>
        <div className='content'>
          
          <div className='box firstBox'>
            <pre>
            <img src={Veterinario} alt="Imagen de un veterinario" />
            <p>Encontrá veterinarias y <br/>
              negocios. Podés validarlos<br/>
              e incluso puntuarlos.</p>
              </pre>
            <button>Descubrilos</button>
          </div>
          <div className='box'>
            <img className='imagenPrincipal' src={Mujer} alt="Imagen de una mujer con su perro" />
          </div>
          <div className='box lastBox'>
            <img src={Lupa} alt="Imagen de una lupa" />
            <pre>
            <p>Los usarios reportan y <br/>
              y buscan a sus mascotas <br/>
              en todo el país.</p>
            </pre>
            <button>Visitá el mapa</button>
          </div>
        </div>
    </div>
  );
};

export default Home;