import React, { useState } from 'react';
import BerriesSection from './BerriesSection';
import SleepTypesSection from './SleepTypesSection';
import { NavLink } from 'react-router-dom';

export function Form(props) {
  const [selectedBerries, setSelectedBerries] = useState([]);
  const [selectedSleepTypes, setSelectedSleepTypes] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

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
    if (selectedBerries.length === 0 && selectedSleepTypes.length === 0) {
      newData = [];
    } else if (selectedBerries.length > 0 && selectedSleepTypes.length === 0) {
      newData = props.pokemon.filter(pm => selectedBerries.includes(pm.berry));
    } else if (selectedBerries.length === 0 && selectedSleepTypes.length > 0) {
      newData = props.pokemon.filter(pm => selectedSleepTypes.includes(pm.sleepType));
    } else {
      newData = props.pokemon.filter(pm =>
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
    let currentPokemon = props.addedPokemon;
    if (currentPokemon.includes(oneCard)) {
      return;
    }
    let newPokemon = [...currentPokemon, oneCard];
    props.setAddedPokemon(newPokemon);
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
          <BerriesSection berries={props.berries} selectedBerries={selectedBerries} onBerryChange={handleBerryChange} />
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
