import { NavLink } from "react-router-dom";
import Blanco from "../assets/Blanco.svg";
import "../styles/navbar.css";
import { BsHouseFill, BsPersonCircle, BsFillFileEarmarkCodeFill, BsChatDotsFill, BsFillBarChartFill} from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={Blanco} alt="logo/blanco" />
      <ul>
        <li>
          <NavLink className="link" to="/"><BsHouseFill className="icon" /> Home</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about"><BsPersonCircle className="icon" /> About me</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/skills"><BsFillBarChartFill className="icon" /> Skills</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/projects"><BsFillFileEarmarkCodeFill className="icon"/> Projects</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact"><BsChatDotsFill className="icon"/> Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
