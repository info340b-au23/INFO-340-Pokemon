import React from 'react';

function BerriesSection(props) {
  const berry = props.berries.map((oneB) => {
    return (
      <div className="form-filter-card">
        <input type="checkbox" aria-describedby={oneB.berryNameDash+"-checkbox"} />
        <img src={oneB.source} alt={oneB.berryName} />
        <label htmlFor={oneB.berryNameDash}>{oneB.berryName}</label>
      </div>
    )
  })
  return (
    <div className="section-container">
      <fieldset>
        <h2>Berries</h2>
        <legend>Select Berries</legend>
        <div className="form-filter-container">
          {berry}
        </div>
      </fieldset>
    </div>
  );
}

export default BerriesSection;