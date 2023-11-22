import React, { useState } from 'react';

export function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navigation">
                <p>Navigation:</p>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <div className={`navItems ${isOpen ? 'open' : ''}`}>
                <div class="navItem">
                    <button><a href="index.html">Searching</a></button>
                </div>
                <div class="navItem">
                    <button><a href="Cooking.html">Cooking</a></button>
                </div>
            </div>
        </div>
    )
}
