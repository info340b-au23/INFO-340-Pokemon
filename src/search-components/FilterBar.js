import React, { useState } from "react";

export function FilterBar({ berries, types, applyFilterCallback }) {
    const [filterBerry, setFilterBerry] = useState('');
    const [filterType, setFilterType] = useState('');

    const handleBerryChange = (event) => {
        setFilterBerry(event.target.checked);
    }

    const handleTypeChange = (event) => {
        setFilterType(event.target.checked)
    }

    const handleClick = (event) => {
        applyFilterCallback(filterBerry, filterType);
    }

    const berry = berries.map((pm) => {
        return (
            <div className="filter-card" key={pm.berry}>
                <input id={pm.berry} type="checkbox" value="" onChange={handleBerryChange}></input>
                <p><img src={pm.berryImg} alt={pm.berry}></img></p>
            </div>
        )
    })

    const sleepType = types.map((pm) => {
        return (
            <div className="filter-card" key={pm.sleepType}>
                <input id={pm.sleepType} type="checkbox" value="" onChange={handleTypeChange}></input>
                <label htmlFor={pm.sleepType}>{pm.sleepType}</label>
            </div>
        )
    })

    return (
        <div className="search-filter-container">
            <section>
                <h2>Filter</h2>
                <h3>by berries</h3>
                {berry}
                <h3>by sleep type</h3>
                {sleepType}
                <button id="submitButton" type="submit" className="search-submitButton" onClick={handleClick}>Apply Filter</button>
            </section>
        </div>
    )
}
