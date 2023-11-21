import React from "react";

export function CardList(props) {
    const pokemon = props.pokemon;

    const card = pokemon.map((oneP) => {
        return (
            <div className="search-card" key={oneP.name}>
                <img src={oneP.image} alt={oneP.name}></img>
                <p>{oneP.name}</p>
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
