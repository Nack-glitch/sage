import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="hero container">
      <motion.h1
        className="hero__title"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
     <span className="gradient"> Naol Gudeta </span> 
  
     
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        Hi,  <b>I’m</b> MERN Stack Web & Mobile App Developer, Founder of Capra-Nack Digital Solutions, creating fast, user-friendly, and innovative digital products.
      </motion.p>

      <motion.div
        className="hero__cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a className="btn btn--primary" href="#projects">View Projects</a>
        <a className="btn btn--ghost" href="#contact">Hire Me</a>
      </motion.div>

      <motion.div
        className="hero__device"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Minimal “product shot” frame */}
        <div className="device">
          <div className="device__screen">
            <div className="bubbles">
              <span /><span /><span />
            </div>
            <div className="screen__content">
              <h3>Capra-Nack</h3>
              <p>Digital Solutions • Web & Apps</p>
            </div>
          </div>
          <div className="device__base" />
        </div>
      </motion.div>
    </div>
  );
}
