import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import "./RandomMeal.css"; // Import the CSS file for styling

function RandomMeal() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getRandomMeal();
  }, []);

  const getRandomMeal = async () => {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    setMeal(randomMeal);
  };

  const handleNewMealClick = () => {
    getRandomMeal();
  };

  return (
    <div className="random-meal">
      <h2 className="random-meal__title">Random Recipe</h2>
      <div className="random-meal__content">
        {meal ? (
          <MealCard meal={meal} showDetailsButton />
        ) : (
          <p className="random-meal__loading">Loading random meal...</p>
        )}
      </div>
      <button
        className="random-meal__button random-meal__button--new-meal"
        onClick={handleNewMealClick}
      >
        Get New Meal
      </button>
    </div>
  );
}

export default RandomMeal;
