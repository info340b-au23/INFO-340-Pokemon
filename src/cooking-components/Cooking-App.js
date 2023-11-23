import React, { useState } from 'react';
import IngredientsForm from './IngredientsForm';
import ResultDisplay from './ResultDisplay';
import { Navbar } from './Navbar';

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

  const [isOpen, setIsOpen] = useState(false);

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

  const H1 = ({ isOpen }) => {
    return (
      <div>
        <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Cooking Simulator</h1>
      </div>
    );
  }

  const applyMenu = (isOpen) => {
    setIsOpen(isOpen)
  }

  return (
    <div className="App">
      <main className="cooking-container">
        <hearder>
          <nav>
            <Navbar applyMenuCallBack={applyMenu} />
          </nav>
          <H1 isOpen={isOpen} />
        </hearder>
        <section className="cooking-pan-container">
          <img src="img/IMG_6804.jpg" alt="PAN"></img>
          <h1>Let's select for cooking</h1>
        </section>
        <IngredientsForm ingredients={ingredients} onChange={handleIngredientChange} onSubmit={handleSubmit} />
        {result && <ResultDisplay result={result} />}
        <footer>
          <p>This web application was created by us using our own two hands.</p>
          <address>Contact Noor Aamir at <a href="mailto:naamir@uw.edu">naamir@uw.edu</a>, Ling (Evelyn) Lin at <a href="mailto:lingl3@uw.edu">lingl3@uw.edu</a>, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi at <a href="mailto:yshi6@uw.edu">yshi6@uw.edu</a>.</address>
          <p>&copy; 2023 INFO 340 Team B6.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;


