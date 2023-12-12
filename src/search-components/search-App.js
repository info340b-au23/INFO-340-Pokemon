import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import listFilesAndUrls from "../firebase-code/storage-download";
import { db } from "..";
import { BNavbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';
import { FilterBar } from './FilterBar';

function App(props) {
    const [filterBerry, setFilterBerry] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [searchPm, setSearchPm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [allBerries, setAllBerries] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [allPokemonDB, setAllPokemonDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const selectedBerries = filterBerry.filter((berry) => berry.checked).map((berry) => berry.name);
    const selectedTypes = filterType.filter((type) => type.checked).map((type) => type.id);

    useEffect(() => {
        const pokemonRef = ref(db, "pokemon");
        const unregisterFunction = onValue(pokemonRef, (snapshot) => {
            const data = snapshot.val();
            const pokemonArray = Object.entries(data).map(([key, value]) => ({
                name: key,
                ...value
            }));
            setAllPokemonDB(pokemonArray);
        });
        //cleanup function for when component is removed
        function cleanup() {
            unregisterFunction(); //call the unregister function
        }
        return cleanup;
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokemonImgData = await listFilesAndUrls('img/Pokemons');
            const pokemonImagesArray = pokemonImgData.map((image) => ({
                pokemonName: image.name.slice(0, -4),
                source: image.url
            }));
            const berriesImgData = await listFilesAndUrls('img/Berries');
            const berriesImagesArray = berriesImgData.map((image) => ({
                berryName: image.name.slice(0, -4),
                berryNameDash: image.name.slice(0, -4).replace(/\s+/g, '-').toLowerCase(),
                source: image.url
            }));
            setAllBerries(berriesImagesArray);
            setAllPokemons(pokemonImagesArray);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading">Working...</div>;  // Loading message
    }

    const getImageUrl = (data) => data?.source || '';

    const pokemonData = allPokemonDB.map((pokemon) => ({
        name: pokemon.name,
        berry: pokemon.berry,
        sleepType: pokemon.sleepType,
        mainSkill: pokemon.mainSkill,
        image: getImageUrl(allPokemons.find((image) => image.pokemonName === pokemon.name)),
        berryImg: getImageUrl(allBerries.find((image) => image.berryName === pokemon.berry))
    }));

    let displayedData;
    if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = pokemonData;
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) => selectedBerries.includes(pm.berry));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) => selectedTypes.includes(pm.sleepType));
    } else if (selectedBerries.length > 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) =>
            selectedBerries.includes(pm.berry) && selectedTypes.includes(pm.sleepType)
        );
    } else if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => selectedBerries.includes(pm.berry) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => selectedTypes.includes(pm.sleepType) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else {
        displayedData = pokemonData.filter((pm) =>
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
    for (let pm of pokemonData) {
        if (!seenBerry.has(pm.berry)) {
            seenBerry.add(pm.berry);
            uniqueBerries.push(pm);
        }
    }

    let uniqueTypes = [];
    let seenType = new Set();
    for (let pm of pokemonData) {
        if (!seenType.has(pm.sleepType)) {
            seenType.add(pm.sleepType);
            uniqueTypes.push(pm);
        }
    }

    const H1 = ({ isOpen }) => {
        return (
            <div className="marginLeft">
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
                    <BNavbar applyMenuCallBack={applyMenu} />
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
            <footer className='marginLeft'>
                <p>This web application was created by us using our own two hands.</p>
                <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;