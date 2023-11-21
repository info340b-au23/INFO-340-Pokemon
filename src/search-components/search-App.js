import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';
import { FilterBar } from './FilterBar';

function App(props) {
    let uniqueBerries = [];
    let seenBerry = new Set();
    for (let pm of props.pokemon) {
        if (!seenBerry.has(pm.berry)) {
            seenBerry.add(pm.berry);
            uniqueBerries.push(pm);
        }
    }

    let uniqueTypes = [];
    let seenType = new Set();
    for (let pm of props.pokemon) {
        if (!seenType.has(pm.sleepType)) {
            seenType.add(pm.sleepType);
            uniqueTypes.push(pm);
        }
    }

    const [filterBerry, setFilterBerry] = useState('');
    const [filterType, setFilterType] = useState('');

    let displayedData;
    if (filterBerry === '') {
        if (filterType === '') {
            displayedData = props.pokemon;
        }
        else {
            displayedData = props.pokemon.filter((pm) => {
                return (
                    pm.sleepType === filterType
                )
            })
        }
    }
    else {
        if (filterType === '') {
            displayedData = props.pokemon.filter((pm) => {
                return (
                    pm.berry === filterBerry
                )
            })
        }
        else {
            displayedData = props.pokemon.filter((pm) => {
                return (
                    pm.berry === filterBerry && pm.sleepType === filterType
                )
            })
        }
    }

    const applyFilter = (selectedBerry, selectedType) => {
        setFilterBerry(selectedBerry);
        setFilterType(selectedType);
    }

    return (
        <div>
            <main>
                <nav>
                    <Navbar />
                </nav>
                <header>
                    <h1>Pokemon Dex</h1>
                </header>
                <SearchBar />
                <div className="search-feature-container">
                    <CardList pokemon={displayedData} />
                    <FilterBar berries={uniqueBerries} types={uniqueTypes} applyFilterCallback={applyFilter} />
                </div>
            </main>
            <footer>
                <p>This web application was created by us using our own two hands.</p>
                Contact our instructor Tim Carlson at <a href="mailto:timca@uw.edu">timca@uw.edu</a>.
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;
