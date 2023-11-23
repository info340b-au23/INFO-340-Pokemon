import React from 'react';
import BerriesSection from './BerriesSection';
import SleepTypesSection from './SleepTypesSection';

function Form() {
  return (
    <div className="form-container">
      <h1>Add to Pokemon Collection</h1>

      <section className="button-container">
        <a href="collection.html" className="button-nav">Return to Collection</a>
      </section>

      <form className="add-collection-form">
        <BerriesSection />
        <SleepTypesSection />

        {/* Other sections/components can be added here if needed */}

        <div className="form-card">
          <img src="img/Eevee.jpg" alt="Eevee" />
          <p>Eevee</p>
          <button className="add-button">Add</button>
        </div>

        <div className="form-submit-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
