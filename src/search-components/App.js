import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Searching from './search-App';
import Collection from './../collection-components/collection-App';
import Cooking from './../cooking-components/Cooking-App';
import Form from './../form-components/Form';
import PokemonDetail from './PokemonDetail';

export default function App(props) {
    return (
        <Routes>
            <Route path="searching" element={<Searching />} />
            <Route path='pokemon/:pName' element={<PokemonDetail />} />
            <Route path="collection" element={<Collection />} />
            <Route path='collection/:pName' element={<PokemonDetail />} />
            <Route path="cooking" element={<Cooking />} />
            <Route path='form' element={<Form />} />
            <Route path="*" element={<Navigate to="/searching" replace />} />
        </Routes>
    )
}