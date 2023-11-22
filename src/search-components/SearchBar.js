import React, {useState} from "react";

export function SearchBar(props) {
    const [searchPm, setSearchPm] =useState('');

    const handleSearchChange = (event) => {
        setSearchPm(event.target.value)
    }

    const handleClick = (event) => {
        props.applySearchCallback(searchPm)
    }

    return (
        <section>
            <form>
                <input type="text" placeholder="Search Pokemon..." onChange={handleSearchChange}></input>
                <button type="button" className="search-searchButton" onClick={handleClick}>Search</button>
            </form>
        </section>
    )
}