import React from "react";

export function FilterBar(props) {
    return (
        <div class="search-filter-container">
            <section>
                <h2>Filter</h2>
                <h3>by berries</h3>
                <div className="filter-card">
                    <input id="belueBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Belue Berry.PNG" alt="Belue Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="pechaBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Pecha Berry.PNG" alt="Pecha Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="blukBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Bluk Berry.PNG" alt="Bluk Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="sitrusBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Sitrus Berry.PNG" alt="Sitrus Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="magoBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Mago Berry.PNG" alt="Mago Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="chestoBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Chesto Berry.PNG" alt="Chesto Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="rawstBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Rawst Berry.PNG" alt="Rawst Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="figyBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Figy Berry.PNG" alt="Figy Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="pamtreBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Pamtre Berry.PNG" alt="Pamtre Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="durinBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Durin Berry.PNG" alt="Durin Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="lumBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Lum Berry.PNG" alt="Lum Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="grepaBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Grepa Berry.PNG" alt="Grepa Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="oranBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Oran Berry.PNG" alt="Oran Berry"></img></p>
                </div>
                <div className="filter-card">
                    <input id="persimBerry" type="checkbox" value=""></input>
                    <p><img src="img/Berries/Persim Berry.PNG" alt="Persim Berry"></img></p>
                </div>
                <h3>by sleep type</h3>
                <div className="filter-card">
                    <input id="dozing" type="checkbox" value=""></input>
                    <label htmlFor="dozing">Dozing</label>
                </div>
                <div className="filter-card">
                    <input id="snoozing" type="checkbox" value=""></input>
                    <label htmlFor="snoozing">Snoozing</label>
                </div>
                <div className="filter-card">
                    <input id="slumbering" type="checkbox" value=""></input>
                    <label htmlFor="slumbering">Slumbering</label>
                </div>
            </section>
        </div>
    )
}