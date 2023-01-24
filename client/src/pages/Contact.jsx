import React from "react";
import NavBar from "../components/NavBar";
import negro from "../assets/Negro.svg";
import "../styles/contact.css";
import { SiLinkedin, SiGithub, SiFacebook, SiWhatsapp } from "react-icons/si";

export function Contact() {
  return (
    <>
      <NavBar />
      <div className="containerContact">
        <img className="logoN" src={negro} alt="Logo negro" />
        <h3>Contacto</h3>
        <p>¿Tiene alguna pregunta o quiere trabajar juntos?</p>
        <p>Contácteme en los siguientes links</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/erickcamachorosasfrondend/"
              target={"_blank"}
            >
              <SiLinkedin /> LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/ErickCamacho22" target={"_blank"}>
              <SiGithub /> GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/erik.camachorosas"
              target={"_blank"}
            >
              <SiFacebook /> FaceBook
            </a>
          </li>

          <li>
            <a href="https://wa.me/+523317698148" target={"_blank"}>
              <SiWhatsapp /> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
