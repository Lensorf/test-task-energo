import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">Главная</Link>
      <Link className="link" to="/data">Данные</Link>
    </div>
  );
}
