import React from "react";
import { motion } from "framer-motion";
import profile from '../components/profile.png';

export default function About() {
  return (
    <div className="about container">
      <motion.div
        className="about__img"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {/* Using the image from public/ */}
        <img src={profile} alt="Naol Gudeta" className="profile-image" />
      </motion.div>

      <motion.div
        className="about__text"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <p>
          I’m a 16-year-old developer from Ethiopia focused on building clean,
          performant, and user-first products. I love
          <b> React</b>, <b>Node</b>, <b>Express</b>, and <b>MongoDB</b>
        .
        </p>
        <div className="about__stats">
          <div><span className="num">5+</span><span>Projects</span></div>
          <div><span className="num">0</span><span>Happy Clients</span></div>
          <div><span className="num">2+</span><span>Years Learning</span></div>
        </div>
        <a className="btn btn--primary" href="#contact">Let’s Work</a>
      </motion.div>
    </div>
  );
}
