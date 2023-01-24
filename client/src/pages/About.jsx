import { GiSpeedometer, GiLightBulb } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { MdDynamicForm } from "react-icons/md";
import "../styles/about.css";
import Color from "../assets/ClaroColor.png";
import NavBar from "../components/NavBar";

export function About() {
  return (
    <>
      <NavBar />
      <div className="containerInfo">
        <div className="info">
          <h1>Sobre mi</h1>
          <div className="cards">
            <div className="cardInfo">
              <GiSpeedometer className="icon" />
              <h2 className="category">Fast </h2>
              <p className="description">
                Mi maxima prioridad, tiempos de carga rápidos e interacción sin
                demoras.
              </p>
            </div>

            <div className="cardInfo">
              <DiResponsive className="icon" />
              <h2 className="category">Responsive</h2>
              <p className="description">
                Mi objetivo, mis desarrollos funcionarán en cualquier
                dispositivo, grande o pequeño.
              </p>
            </div>

            <div className="cardInfo">
              <GiLightBulb className="icon" />
              <h2 className="category">Intuitivo</h2>
              <p className="description">
                Mi preferencia, una WEB intuitiva y fácil de usar.
              </p>
            </div>

            <div className="cardInfo">
              <MdDynamicForm className="icon" />
              <h2 className="category">Dinámico</h2>
              <p className="description">
                Los sitios web no tienen que ser estáticos, me encanta hacer que
                las páginas cobren vida.
              </p>
            </div>
          </div>
        </div>
        <div className="containerDescription">
          <img className="color" src={Color} alt="Imagen portada color" />
          <div className="descripcion">
            <h1>¿Quien soy?</h1>
            <p>Soy desarrollador Front-End independiente.</p>
            <p>
              Me apasionan los efectos de interfaz de usuario, las
              animaciones y la creación de experiencias de usuario
              intuitivas y dinámicas.
            </p>
            <p>
              Me gusta la tecnología y ser autodidacta siempre busco cosas
              nuevas que aprender.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
