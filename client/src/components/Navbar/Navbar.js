import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'navbar-mobile' : ''}`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <div className={`navbar-links ${menuOpen ? 'navbar-links-mobile' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/phone" onClick={() => setMenuOpen(false)}>Phone</Link>
                <Link to="/tv" onClick={() => setMenuOpen(false)}>TV & Smart Home</Link>
                <Link to="/laptop" onClick={() => setMenuOpen(false)}>Laptop & Tablet</Link>
                <Link to="/lifestyle" onClick={() => setMenuOpen(false)}>LifeStyle</Link>
            </div>
            <div className={`navbar-links navbar-links-right ${menuOpen ? 'navbar-links-mobile' : ''}`}>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            </div>
            <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
