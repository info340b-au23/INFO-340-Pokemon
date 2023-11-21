import React from 'react';
import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';
import { FilterBar } from './FilterBar';

function App(props) {
    return (
        <div>
            <main>
                <nav>
                    <Navbar />
                </nav>
                <header>
                    <h1>Pokemon Dex</h1>
                </header>
                <SearchBar />
                <div className="search-feature-container">
                    <CardList />
                    <FilterBar />
                </div>
            </main>
            <footer>
                <p>This web application was created by us using our own two hands.</p>
                Contact our instructor Tim Carlson at <a href="mailto:timca@uw.edu">timca@uw.edu</a>.
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;
