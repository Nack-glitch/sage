import React from "react";
import { motion } from "framer-motion";

import bgVideo from "../components/background.mp4";

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
        transition={{ delay: 0.3   }}
      >
        <a className="btn btn--primary" href="#projects">View Projects</a>
        <a className="btn btn--ghost" href="#contact">Hire Me</a>
      </motion.div>

 
<motion.div
  className="hero__device"
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  style={{ position: "relative", display: "inline-block" }} // container for layering
>
  <video
    src={bgVideo}
    autoPlay
    loop
    muted
    className="device-video"
  />

  <div className="video-overlay">
    <h2>Capra-Nack</h2>
  </div>
</motion.div>

    </div>
  );
}
