import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Searching from './search-App';
import Collection from './../collection-components/collection-App';
import Cooking from './../cooking-components/Cooking-App';
import pokemon from './../data/pokemon.json';

export default function App(props) {
    return (
        <Routes>
            <Route path="searching" element={<Searching pokemon={pokemon} />} />
            <Route path="collection" element={<Collection pokemon={pokemon} />} />
            <Route path="cooking" element={<Cooking />} />
            <Route path="*" element={<Navigate to="/searching" replace />} />
        </Routes>
    )
}