
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import About from './pages/About';


export default function App() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <footer className="footer" >  Capra-Nack Digital Solutions </footer>
    </div>
  );
}