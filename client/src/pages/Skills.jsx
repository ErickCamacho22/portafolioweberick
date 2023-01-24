import React from "react";
import NavBar from "../components/NavBar";
import "../styles/skills.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { DiHtml5, DiCss3, DiBootstrap } from "react-icons/di";
import { SiJavascript, SiTypescript, SiReact, SiMysql, SiDocker, SiPython, SiPhp } from "react-icons/si";
import { ProgressBar } from "../components/ProgressBar";

export function Skills() {

  return (
    <>
      <NavBar />
      <div className="contenedor">
        <h1>Habilidades</h1>
        <div className="habilidades">
          <h2>HTML  <DiHtml5 /></h2>
          <ProgressBar texto="90%" porcentaje="90" />
        </div>
        <div className="habilidades">
          <h2>CSS   <DiCss3 /> </h2>
          <ProgressBar texto="90%" porcentaje="90" />
        </div>
        <div className="habilidades">
          <h2>JavaScript    <SiJavascript /> </h2>
          <ProgressBar texto="90%" porcentaje="90" />
        </div>
        <div className="habilidades">
          <h2>Bootstrap <DiBootstrap /> </h2>
          <ProgressBar texto="80%" porcentaje="80" />
        </div>
        <div className="habilidades">
          <h2>ReactJS   <SiReact /> </h2>
          <ProgressBar texto="80%" porcentaje="80" />
        </div>
        <div className="habilidades">
          <h2>TypeScript    <SiTypescript /> </h2>
          <ProgressBar texto="60%" porcentaje="60" />
        </div>
        <div className="habilidades">
          <h2>MySQL <SiMysql /> </h2>
          <ProgressBar texto="60%" porcentaje="60" />
        </div>
        <div className="habilidades">
          <h2>Docker    <SiDocker /> </h2>
          <ProgressBar texto="40%" porcentaje="40" />
        </div>
        <div className="habilidades">
          <h2>Python    <SiPython /> </h2>
          <ProgressBar texto="20%" porcentaje="20" />
        </div>
        <div className="habilidades">
          <h2>PHP   <SiPhp /> </h2>
          <ProgressBar texto="20%" porcentaje="20" />
        </div>
      </div>
    </>
  );
}
