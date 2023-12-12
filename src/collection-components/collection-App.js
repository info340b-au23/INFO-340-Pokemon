import React, { useState } from 'react';
import { BNavbar } from './../search-components/Navbar';
import { NavLink } from 'react-router-dom';

function App(props) {
    const [isOpen, setIsOpen] = useState(false);

    const H1 = ({ isOpen }) => {
        return (
            <div className='marginLeft'>
                <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>My Collection</h1>
            </div>
        );
    }

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    const card = props.pokemon.map((oneP) => {
        return (
            <div className="collection-card" key={oneP.name}>
                <img src={oneP.image} alt={oneP.name}></img>
                <NavLink to={`/collection/${oneP.name}`} className="cardText">{oneP.name}</NavLink>
            </div>
        )
    })

    return (
        <div>
            <header>
                <nav>
                    <BNavbar applyMenuCallBack={applyMenu} />
                </nav>
                <H1 isOpen={isOpen} />
            </header>
            <main>
                <section className="button-container">
                    <h2 className='marginLeft'>Click the button below to navigate to the pop-up form</h2>
                    <NavLink to={"/form"} className="linkButton">Add Pokémon</NavLink>
                </section>

                <div className="collection-cards-container">
                    {card}
                </div>
            </main>
            <footer className="marginLeft">
                <p>This web application was created by us using our own two hands.</p>
                <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;
