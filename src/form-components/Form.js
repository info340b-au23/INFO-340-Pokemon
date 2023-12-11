import React, { useState } from 'react';
import BerriesSection from './BerriesSection';
import SleepTypesSection from './SleepTypesSection';
import { saveAs } from 'file-saver';
import { NavLink } from 'react-router-dom';

export function Form(props) {
  const [selectedBerries, setSelectedBerries] = useState([]);
  const [selectedSleepTypes, setSelectedSleepTypes] = useState([]);

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

  const handleAddPokemon = () => {
    const pokemonData = {
      name: 'Eevee',
      berries: selectedBerries,
      sleepTypes: selectedSleepTypes,
    };

    
    const jsonString = JSON.stringify(pokemonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, 'Pokemon.json');

  
    setSelectedBerries([]);
    setSelectedSleepTypes([]);
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

          <div className="form-card">
            <img src="img/Eevee.jpg" alt="Eevee" />
            <p>Eevee</p>
            <button className="add-button" onClick={handleAddPokemon}>
              Add
            </button>
          </div>

          <div className="form-submit-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
      <footer>
        <p>This web application was created by us using our own two hands.</p>
        <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
        <p>&copy; 2023 INFO 340 Team B6.</p>
      </footer>
    </div>
  );
}

export default Form;
