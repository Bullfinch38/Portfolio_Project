import React from "react";
import "./about.css";
import React_icon from "../../assets/React_icon.svg.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={React_icon} alt="About Logo" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0-1 Year of Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Companies</h5>
              <small>
                <ul>
                  <li>Five1 Gmbh, Walldorf, Germany</li>
                  <li>Société Générale, Moscow, Russia</li>
                </ul>
              </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eius ducimus at quasi, aspernatur accusantium quisquam modi dolores
            architecto mollitia laboriosam iusto libero assumenda aperiam
            reiciendis dicta accusamus, harum aut.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
