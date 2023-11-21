import React from "react";

export function SearchBar(props) {
    return (
        <section>
            <form>
                <input type="text" placeholder="Search Pokemon..."></input>
                <button type="button" className="search-searchButton">Search</button>
            </form>
        </section>
    )
}