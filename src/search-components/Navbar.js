import React from 'react';

export function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navigation">
                <p>Navigation:</p>
            </div>
            <div className="navItem">
                <button><a href="collection.html">Collection</a></button>
            </div>
            <div className="navItem">
                <button><a href="Cooking.html">Cooking</a></button>
            </div>
        </div>
    )
}