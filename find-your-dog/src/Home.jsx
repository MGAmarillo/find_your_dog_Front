import React from 'react';
import Logo from './assets/images/Find_your_dog_logo.png';
import Mujer from './assets/images/Perro_mujer.png';
import Veterinario from './assets/images/Veterinario.png';
import Lupa from './assets/images/Lupa.png';
import Info1 from './assets/images/Info1.png';
import Info2 from './assets/images/Info2.png';
import Info3 from './assets/images/Info3.png';
import Perro from './assets/images/Perro.png';
import Niña from './assets/images/Niña.png';
import Ig from './assets/images/instagram.png';
import Tw from './assets/images/x.png';
import Gt from './assets/images/git.png';
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
        
        <div className='information'>
            
            <div className='informationBlock'>
            <img src={Info1} alt="" />
            <p>Verifica y puntúa diferentes<br/>negocios que están<br/>abiertos 24hs.</p>
            </div>
            
            <div className='informationBlock'>
            <img src={Info2} alt="" />
            <p>Encuentra a tu mascota<br/>perdida o publica a una<br/>que encontraste perdida.</p>
            </div>
            
            <div className='informationBlock'>
            <img src={Info3} alt="" />
            <p>Descubre y publica tips para<br/>toda la comunidad y mejora<br/>el bienestar de tu mascota.</p>
            </div>

        </div>

        <div className='cta'>

        <div className='ctaText'>
            <h1>¿Listos para<br/>el reencuentro?</h1>
            <button>Buscá en el mapa</button>
        </div>

        <div className='ctaImages'>
          <img src={Perro} alt="" />
          <img src={Niña} alt="" />
        </div>
        
        </div>

        <div className='footer'>
       
        <div className='footerImages'>
         <a href=""><img src={Ig} alt="" /></a>
         <a href=""><img src={Tw} alt="" /></a>
         <a href=""><img src={Gt} alt="" /></a> 
        </div>
       
        <div className='footerLogo'>
        <img src={Logo} alt="" />
        </div>
       
        </div>
        
    </div>
  );
};

export default Home;