import React from 'react';

function SleepTypesSection() {
  return (
    <div className="section-container">
      <fieldset>
        <h2>Sleep Types</h2>
        <legend>Select Sleep Types</legend>
        <div className="form-filter-card">
          <input type="checkbox" aria-describedby="dozing-checkbox" />
          <label htmlFor="dozing">Dozing</label>
        </div>
        <div className="form-filter-card">
          <input type="checkbox" aria-describedby="snoozing-checkbox" />
          <label htmlFor="snoozing">Snoozing</label>
        </div>
        <div className="form-filter-card">
          <input type="checkbox" aria-describedby="slumbering-checkbox" />
          <label htmlFor="slumbering">Slumbering</label>
        </div>
        {/* Repeat similar structure for other sleep types */}
      </fieldset>
    </div>
  );
}

export default SleepTypesSection;
