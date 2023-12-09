import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

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
                <div className="navItem">
                    <NavLink to={"/collection"}>Collection</NavLink>
                </div>
                <div className="navItem">
                    <NavLink to={"/cooking"}>Cooking</NavLink>
                </div>
            </div>
        </div>
    )
}
