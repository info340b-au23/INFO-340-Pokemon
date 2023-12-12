import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { BNavbar } from './Navbar';

import _ from 'lodash';

import Pokemon from './../data/pokemon.json';

export default function PokemonDetail(props) {
    const [isOpen, setIsOpen] = useState(false);

    const { pName: pNameString } = useParams();
    let pokemon = _.find(Pokemon, { name: pNameString });

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    const H1 = ({ isOpen }) => {
        return (
            <div className='marginLeft'>
                <h1 className={`h1 ${isOpen ? 'navbar-open-detail' : ''}`}>{pokemon.name}</h1>
            </div>
        );
    }
    
    return (
        <div>
            <nav>
                <BNavbar applyMenuCallBack={applyMenu} />
            </nav>
            <H1 isOpen={isOpen} />
            <div className='info'>
                <img className='search-card' src={`/${pokemon.image}`} alt={pokemon.name}></img>
                <div className='info-text'>
                    <p>Berry: {pokemon.berry}</p>
                    <p>Sleep Type: {pokemon.sleepType}</p>
                    <p>Main Skill: {pokemon.mainSkill}</p>
                </div>
            </div>
        </div>
    )
}