import React, { useState } from 'react';
import IngredientsForm from './IngredientsForm';
import ResultDisplay from './ResultDisplay';

function App() {
  const [ingredients, setIngredients] = useState({
    fancyApple: 0,
    fancyEgg: 0,
    honey: 0,
    moomooMilk: 0,
    snoozyTomato: 0,
    soothingCacao: 0,
    warmingGinger: 0
  });
  const [result, setResult] = useState(null);

  const handleIngredientChange = (ingredient, value) => {
    setIngredients(prevIngredients => ({
      ...prevIngredients,
      [ingredient]: isNaN(value) ? 0 : parseInt(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dish = determineDish(ingredients);
    setResult(dish);
  };

  const determineDish = (ingredients) => {
    const { fancyApple, fancyEgg, honey, moomooMilk, snoozyTomato, soothingCacao, warmingGinger } = ingredients;

    if (moomooMilk === 7) return 'Warm Moomoo Milk';
    if (honey === 9 && soothingCacao === 8 && moomooMilk === 7) return 'Sweet Scent Chocolate Cake';
    if (fancyApple === 11 && moomooMilk === 9 && honey === 7 && soothingCacao === 8) return 'Lovely Kiss Smoothie';
    if (honey === 20 && fancyEgg === 15 && moomooMilk === 10 && fancyApple === 10) return 'Jigglypuff\'s Fruity Flan';
    if (honey === 9) return 'Craft Soda Pop';
    if (honey === 14 && warmingGinger === 12 && soothingCacao === 5 && fancyEgg === 4) return 'Steadfast Ginger Cookies';
    if (snoozyTomato === 9 && fancyApple === 7) return 'Stalwart Vegetable Juice';
    if (warmingGinger === 9 && fancyApple === 7) return 'Ember Ginger Tea';

    return null;
  };

  return (
    <div className="App">
      <Header />
      <IngredientsForm ingredients={ingredients} onChange={handleIngredientChange} onSubmit={handleSubmit} />
      {result && <ResultDisplay result={result} />}
      <Footer />
    </div>
  );
}

export default App;


