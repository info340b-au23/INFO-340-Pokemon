import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';
import { FilterBar } from './FilterBar';

function App(props) {
    const [filterBerry, setFilterBerry] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [searchPm, setSearchPm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const selectedBerries = filterBerry.filter(berry => berry.checked).map(berry => berry.name);
    const selectedTypes = filterType.filter(type => type.checked).map(type => type.id);

    let displayedData;
    if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = props.pokemon;
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = props.pokemon.filter(pm => selectedBerries.includes(pm.berry));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = props.pokemon.filter(pm => selectedTypes.includes(pm.sleepType));
    } else if (selectedBerries.length > 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = props.pokemon.filter(pm =>
            selectedBerries.includes(pm.berry) && selectedTypes.includes(pm.sleepType)
        );
    } else if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = props.pokemon.filter(pm => pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = props.pokemon.filter(pm => selectedBerries.includes(pm.berry) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm !== '') {
        displayedData = props.pokemon.filter(pm => selectedTypes.includes(pm.sleepType) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else {
        displayedData = props.pokemon.filter(pm =>
            selectedBerries.includes(pm.berry) && selectedTypes.includes(pm.sleepType) && pm.name.toLowerCase().includes(searchPm.toLowerCase())
        );
    }

    const applyFilter = (selectedBerry, selectedType) => {
        setFilterBerry(selectedBerry);
        setFilterType(selectedType);
    }

    const applySearch = (searchedPm) => {
        setSearchPm(searchedPm);
    }

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

    const H1 = ({ isOpen }) => {
        return (
            <div>
                <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Pokemon Dex</h1>
            </div>
        );
    }

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    return (
        <div>
            <header>
                <nav>
                    <Navbar applyMenuCallBack={applyMenu} />
                </nav>
                <H1 isOpen={isOpen} />
            </header>
            <main>
                <SearchBar applySearchCallback={applySearch} />
                <div className="search-feature-container">
                    <CardList pokemon={displayedData} />
                    <FilterBar berries={uniqueBerries} types={uniqueTypes} applyFilterCallback={applyFilter} />
                </div>
            </main>
            <footer>
                <p>This web application was created by us using our own two hands.</p>
                <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;