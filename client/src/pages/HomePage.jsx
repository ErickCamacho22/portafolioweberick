import Codes23354 from "../assets/Codes23354.mp4"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../styles/home.css"
import { NavLink } from 'react-router-dom'


export function HomePage() {



  return (
    <>
      <div id="container">
        <h1>
          !Hola¡ soy <span>Erick Camacho Rosas</span>
        </h1>
        <h2>Desarrollador Web</h2>
        <NavLink className="button" to='/about'>
          Ver mi trabajo  <BsFillArrowRightCircleFill className="icon" />
        </NavLink>
      </div>

      <video autoPlay loop muted >
        <source src={Codes23354} alt='VideoDeFondo' />
      </video>
      <div className="capa"></div>
    </>
  );
}

