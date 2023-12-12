import React, { useState, useEffect } from 'react';
import BerriesSection from './BerriesSection';
import SleepTypesSection from './SleepTypesSection';
import { NavLink } from 'react-router-dom';
import { ref, onValue, set as firebaseSet } from "firebase/database";
import listFilesAndUrls from "../firebase-code/storage-download";
import { db } from "..";

export function Form(props) {
  const [selectedBerries, setSelectedBerries] = useState([]);
  const [selectedSleepTypes, setSelectedSleepTypes] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [allBerries, setAllBerries] = useState([]);
  const [allPokemonDB, setAllPokemonDB] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [allCollection, setAllCollection] = useState([]);

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
      const pokemonImagesArray = pokemonImgData.map(image => ({
        pokemonName: image.name.slice(0, -4),
        source: image.url
      }));
      const berriesImgData = await listFilesAndUrls('img/Berries');
      const berriesImagesArray = berriesImgData.map(image => ({
        berryName: image.name.slice(0, -4),
        berryNameDash: image.name.slice(0, -4).replace(/\s+/g, '-').toLowerCase(),
        source: image.url
      }));
      setAllBerries(berriesImagesArray);
      setAllPokemons(pokemonImagesArray);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const collectionRef = ref(db, "collection");
    const unregisterFunction = onValue(collectionRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const collectionArray = Object.entries(data).map(([key, value]) => ({
                name: key,
                ...value
            }));
            setAllCollection(collectionArray);
        } else {
            setAllCollection([]);
        }
    });
    //cleanup function for when component is removed
    function cleanup() {
        unregisterFunction(); //call the unregister function
    }
    return cleanup;
})

  const handleBerryChange = (berryName) => {
    const updatedBerries = [...selectedBerries];
    const index = updatedBerries.indexOf(berryName);

    if (index === -1) {
      updatedBerries.push(berryName);
    } else {
      updatedBerries.splice(index, 1);
    }

    setSelectedBerries(updatedBerries);
  };

  const handleSleepTypeChange = (sleepType) => {
    const updatedSleepTypes = [...selectedSleepTypes];
    const index = updatedSleepTypes.indexOf(sleepType);

    if (index === -1) {
      updatedSleepTypes.push(sleepType);
    } else {
      updatedSleepTypes.splice(index, 1);
    }

    setSelectedSleepTypes(updatedSleepTypes);
  };

  const handleFilteredPokemon = (event) => {
    event.preventDefault();
    let newData;

    const getImageUrl = (data) => data?.source || '';

    const pokemonData = allPokemonDB.map(pokemon => ({
      name: pokemon.name,
      berry: pokemon.berry,
      sleepType: pokemon.sleepType,
      mainSkill: pokemon.mainSkill,
      image: getImageUrl(allPokemons.find(image => image.pokemonName === pokemon.name)),
      berryImg: getImageUrl(allBerries.find(image => image.berryName === pokemon.berry))
    }));

    if (selectedBerries.length === 0 && selectedSleepTypes.length === 0) {
      newData = [];
    } else if (selectedBerries.length > 0 && selectedSleepTypes.length === 0) {
      newData = pokemonData.filter(pm => selectedBerries.includes(pm.berry));
    } else if (selectedBerries.length === 0 && selectedSleepTypes.length > 0) {
      newData = pokemonData.filter(pm => selectedSleepTypes.includes(pm.sleepType));
    } else {
      newData = pokemonData.filter(pm =>
        selectedBerries.includes(pm.berry) && selectedSleepTypes.includes(pm.sleepType)
      );
    }
    if (newData && newData.length > 0) {
      setDisplayedData(newData);
    } else {
      setDisplayedData([]);
    }
  }

  const displayedCard = displayedData.map((oneCard) => {
    return (
      <div className="form-card" key={oneCard.name}>
        <img src={oneCard.image} alt={oneCard.name} />
        <p>{oneCard.name}</p>
        <button className="add-button" onClick={(event) => handleAddPokemon(event, oneCard)}>
          Add
        </button>
      </div>
    )
  })

  const handleAddPokemon = (event, oneCard) => {
    event.preventDefault();
    let currentPokemon = allCollection;
    if (currentPokemon.includes(oneCard)) {
      return;
    }

    const newPokemonRef = ref(db, "collection/" + oneCard.name);
    const newPokemonData = {
      berry: oneCard.berry,
      sleepType: oneCard.sleepType,
      mainSkill: oneCard.mainSkill,
      image: oneCard.image,
      berryImg: oneCard.berryImg
    };

    firebaseSet(newPokemonRef, newPokemonData)
      .then(() => console.log("data saved successfully!"))
      .catch(err => console.log(err)); //log any errors for debugging
  };

  return (
    <div className="form-container">
      <header>
        <h1>Add to Pokemon Collection</h1>
      </header>
      <main>
        <section className="button-container">
          <NavLink to={"/collection"} className="linkButton">Return to Collection</NavLink>
        </section>

        <form className="add-collection-form">
          <BerriesSection berries={allBerries} selectedBerries={selectedBerries} onBerryChange={handleBerryChange} />
          <SleepTypesSection selectedSleepTypes={selectedSleepTypes} onSleepTypeChange={handleSleepTypeChange} />

          <div className="form-cards-container">
            {displayedCard}
          </div>

          <div className="form-submit">
            <button id="submitButton" type="submit" className="form-submit-button" onClick={handleFilteredPokemon}>Submit</button>
          </div>
        </form>
      </main>
      <footer>
        <p>This web application was created by us using our own two hands.</p>
        <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
        <p>&copy; 2023 INFO 340 Team B6.</p>
      </footer>
    </div>
  )
};

export default Form;
