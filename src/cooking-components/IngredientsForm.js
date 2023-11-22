import React from "react";

export function IngredientsForm({ ingredients, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.fancyApple}
          onChange={(e) => onChange('fancyApple', parseInt(e.target.value))}
        />
        <label>Fancy Apple</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.fancyEgg}
          onChange={(e) => onChange('fancyEgg', parseInt(e.target.value))}
        />
        <label>Fancy Egg</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.honey}
          onChange={(e) => onChange('honey', parseInt(e.target.value))}
        />
        <label>Honey</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.moomooMilk}
          onChange={(e) => onChange('moomooMilk', parseInt(e.target.value))}
        />
        <label>Moomoo Milk</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.snoozyTomato}
          onChange={(e) => onChange('snoozyTomato', parseInt(e.target.value))}
        />
        <label>Snoozy Tomato</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.soothingCacao}
          onChange={(e) => onChange('soothingCacao', parseInt(e.target.value))}
        />
        <label>Soothing Cacao</label>
      </div>

      <div className="ingredient-item">
        <input
          type="number"
          value={ingredients.warmingGinger}
          onChange={(e) => onChange('warmingGinger', parseInt(e.target.value))}
        />
        <label>Warming Ginger</label>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}