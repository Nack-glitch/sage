
import React from 'react';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:0}}>
        <div className="brand">
          <div className="logo">
            <img className='mylogo' src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/40f67ad1f0c82e2ee99f0c927196c486~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b48f796d&x-expires=1755097200&x-signature=5GP9v9MJ8Am0SNrm95X9xsC6Hyg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva'></img>
          </div>
          <div>
            <h1>MyTasks</h1>
            <p>Simple, fast & delightful</p>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/add" className={getLinkClass}>Add Task</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}