import React from "react";
import './styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Commerzbank x Alfiarze</h1>
            <p className="header-subtitle">
                Przyspiesz swoją pracę, pisz lepszy kod i rozwijaj projekty szybciej dzięki wsparciu zaawansowanej sztucznej inteligencji.
            </p>
            <p className="header-subtitle">
                Zautomatyzuj rutynowe zadania i odkryj nowe możliwości z Twoim inteligentnym pomocnikiem.
            </p>
        </header>
    );
}

export default Header