import React from 'react';
import './styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">ALFIARZE.PL</div>
            <ul className="navbar-links">
                <li><a href="#features">Funkcje</a></li>
                <li><a href="#pricing">Cennik</a></li>
                <li><a href="#docs">Dokumentacja</a></li>
                <li><a href="#community">Społeczność</a></li>
                <li><a href="#login" className="navbar-login">Zaloguj się</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
