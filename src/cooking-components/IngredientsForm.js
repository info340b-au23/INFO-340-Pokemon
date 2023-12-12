import React, { useState, useEffect } from 'react';
import listFilesAndUrls from "../firebase-code/storage-download";

export function IngredientsForm({ ingredients, onChange, onSubmit }) {
  const [ingredientImages, setIngredientImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await listFilesAndUrls('img/Ingredients');
      setIngredientImages([...imgData]);
    };
    fetchData();
  }, []);

  // Safely access image URLs
  const getImageUrl = (index) => ingredientImages[index]?.url || '';

  return (
    <div className="cooking-form-container">
      <form onSubmit={onSubmit}>
        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.fancyApple}
            onChange={(e) => onChange('fancyApple', parseInt(e.target.value))}
          />
          <img src={getImageUrl(0)} alt="Fancy Apple"></img>
          <label>Fancy Apple</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.fancyEgg}
            onChange={(e) => onChange('fancyEgg', parseInt(e.target.value))}
          />
          <img src={getImageUrl(1)} alt="Fancy Egg"></img>
          <label>Fancy Egg</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.honey}
            onChange={(e) => onChange('honey', parseInt(e.target.value))}
          />
          <img src={getImageUrl(2)} alt="Honey"></img>
          <label>Honey</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.moomooMilk}
            onChange={(e) => onChange('moomooMilk', parseInt(e.target.value))}
          />
          <img src={getImageUrl(3)} alt="Moomoo Milk"></img>
          <label>Moomoo Milk</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.snoozyTomato}
            onChange={(e) => onChange('snoozyTomato', parseInt(e.target.value))}
          />
          <img src={getImageUrl(4)} alt="Snoozy Tomato"></img>
          <label>Snoozy Tomato</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.soothingCacao}
            onChange={(e) => onChange('soothingCacao', parseInt(e.target.value))}
          />
          <img src={getImageUrl(5)} alt="Soothing Cacao"></img>
          <label>Soothing Cacao</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.warmingGinger}
            onChange={(e) => onChange('warmingGinger', parseInt(e.target.value))}
          />
          <img src={getImageUrl(6)} alt="Warming Ginger"></img>
          <label>Warming Ginger</label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default IngredientsForm;