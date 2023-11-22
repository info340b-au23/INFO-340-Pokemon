import React from "react";

export function ResultDisplay({ result }) {
  const dishImages = {
    'Warm Moomoo Milk': '/img/Dishes/Warm Moomoo Milk.PNG',
    'Sweet Scent Chocolate Cake': '/img/Dishes/Sweet Scent Chocolate Cake.PNG',
    'Lovely Kiss Smoothie': '/img/Dishes/Lovely Kiss Smoothie.PNG',
    'Jigglypuff\'s Fruity Flan': '/img/Dishes/Jigglypuff\'s Fruity Flan.PNG',
    'Craft Soda Pop': '/img/Dishes/Craft Soda Pop.PNG',
    'Steadfast Ginger Cookies': '/img/Dishes/Steadfast Ginger Cookies.PNG',
    'Stalwart Vegetable Juice': '/img/Dishes/Stalwart Vegetable Juice.PNG',
    'Ember Ginger Tea': '/img/Dishes/Ember Ginger Tea.PNG'
  };

  return (
    <div>
      {result ? (
        <>
          <h1>Success! Dish: {result}</h1>
          <img src={dishImages[result]} alt={result} style={{ maxWidth: '100%' }} />
        </>
      ) : (
        <h1>No matching dish found</h1>
      )}
    </div>
  );
}

export default ResultDisplay;

  