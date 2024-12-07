// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', color: '#fff' }}>
        <li><Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
