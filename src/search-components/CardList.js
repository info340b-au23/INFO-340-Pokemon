import React from "react";
import { NavLink } from "react-router-dom";

export function CardList(props) {
    const pokemon = props.pokemon;

    const card = pokemon.map((oneP) => {
        return (
            <div className="search-card" key={oneP.name}>
                <img src={oneP.image} alt={oneP.name}></img>
                <NavLink to={`/pokemon/${oneP.name}`} className="cardText">{oneP.name}</NavLink>
            </div>
        )
    })

    return (
        <section>
            <div className="search-cards-container">
                {card}
            </div>
        </section>
    )
}