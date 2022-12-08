import React from "react";
import "./css/card.css";
import foto from "../img/myphoto.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function Card() {
  return (
    <div className="card w-50 mt-3 mb-3 mx-auto">
      <img src={foto} className="card-img-top " alt="/" />
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h1>ADNAN YOUSFI</h1>
        <h4>Frontend Developer</h4>
        <button className="btn btn-light px-5 py-2">
          <i className="bi bi-envelope me-2"></i>
          Email
        </button>
        <div className="mt-5">
          <div className="about">
            <h3>About</h3>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="Interests">
            <h3>Interests</h3>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>
      <footer className="card-footer text-center">
        <button  href="/" className="btn-light"><FontAwesomeIcon icon={faTwitter} /></button >
        <button  href="/" className="btn-light"><FontAwesomeIcon icon={faFacebook} /></button >
        <button  href="/" className="btn-light"><FontAwesomeIcon icon={faInstagram} /></button >
        <button  href="/" className="btn-light"><FontAwesomeIcon icon={faSquareGithub} /></button >
      </footer>
    </div>
  );
}

export default Card;
