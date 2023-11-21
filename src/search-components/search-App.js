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
                <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;
