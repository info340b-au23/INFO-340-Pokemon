import React from "react";

export function IngredientsForm({ ingredients, onChange, onSubmit }) {
  return (
    <div className="cooking-form-container">
      <form onSubmit={onSubmit}>
        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.fancyApple}
            onChange={(e) => onChange('fancyApple', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Fancy Apple.PNG" alt="Fancy Apple"></img>
          <label>Fancy Apple</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.fancyEgg}
            onChange={(e) => onChange('fancyEgg', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Fancy Egg.PNG" alt="Fancy Egg"></img>
          <label>Fancy Egg</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.honey}
            onChange={(e) => onChange('honey', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Honey.PNG" alt="Honey"></img>
          <label>Honey</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.moomooMilk}
            onChange={(e) => onChange('moomooMilk', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Moomoo Milk.PNG" alt="Moomoo Milk"></img>
          <label>Moomoo Milk</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.snoozyTomato}
            onChange={(e) => onChange('snoozyTomato', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Snoozy Tomato.PNG" alt="Snoozy Tomato"></img>
          <label>Snoozy Tomato</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.soothingCacao}
            onChange={(e) => onChange('soothingCacao', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Soothing Cacao.PNG" alt="Soothing Cacao"></img>
          <label>Soothing Cacao</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            value={ingredients.warmingGinger}
            onChange={(e) => onChange('warmingGinger', parseInt(e.target.value))}
          />
          <img src="img/Ingredients/Warming Ginger.PNG" alt="Warming Ginger"></img>
          <label>Warming Ginger</label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default IngredientsForm;