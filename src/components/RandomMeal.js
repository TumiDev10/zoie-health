import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import "./RandomMeal.css"; // Import the CSS file for styling

function RandomMeal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getRandomMeals();
  }, []);

  const getRandomMeals = async () => {
    const numberOfMeals = 10;
    const mealPromises = [];

    for (let i = 0; i < numberOfMeals; i++) {
      mealPromises.push(fetch("https://www.themealdb.com/api/json/v1/1/random.php"));
    }

    const responses = await Promise.all(mealPromises);
    const mealDataPromises = responses.map((response) => response.json());
    const mealData = await Promise.all(mealDataPromises);

    const randomMeals = mealData.map((data) => data.meals[0]);
    setMeals(randomMeals);
  };

  const handleNewMealsClick = () => {
    getRandomMeals();
  };

  return (
    <div className="random-meal">
      <h2 className="random-meal__title">Random Recipes</h2>
      <div className="random-meal__content">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              showDetailsButton
              removeMeal={null}
              showLikeButton // Pass the showLikeButton prop here
              smallerCard
            />
          ))
        ) : (
          <p className="random-meal__loading">Loading random meals...</p>
        )}
      </div>
      <button
        className="random-meal__button random-meal__button--new-meals"
        onClick={handleNewMealsClick}
      >
        Get New Meals
      </button>
    </div>
  );
}

export default RandomMeal;
