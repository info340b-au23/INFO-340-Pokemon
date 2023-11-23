import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './search-components/search-App';
// import Collection from './collection-components/collection-App';
// import Cooking from './cooking-components/Cooking-App';
// import Form from './form-components/Form';
import pokemon from './data/pokemon.json';
// import berry from './data/berry.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App pokemon={pokemon}/>
    // <Collection pokemon={pokemon}/>
    // <Cooking />
    // <Form berries={berry}/>
);