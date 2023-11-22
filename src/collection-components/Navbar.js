import React, { useState } from 'react';

export function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        props.applyMenuCallBack(!isOpen);
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
                    <a href="index.html">Searching</a>
                </div>
                <div class="navItem">
                    <a href="Cooking.html">Cooking</a>
                </div>
            </div>
        </div>
    )
}
