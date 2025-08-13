// src/components/Footer.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Naol Gudeta. All rights reserved.</p>
      <p>💻 Built with React | 🚀 Designed by Capra-Nack Digital Solutions</p>
    </footer>
  );
}
