import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { getMealsLS, getMealById, removeMealLS } from "../utils/localStorage";
import "./FavoriteMeals.css";

function FavoriteMeals() {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    fetchFavMeals();
  }, []);

  const fetchFavMeals = () => {
    const mealIds = getMealsLS();
    const fetchMeals = async () => {
      const meals = await Promise.all(
        mealIds.map((mealId) => getMealById(mealId))
      );
      setFavoriteMeals(meals);
    };
    fetchMeals();
  };

  const removeMeal = (mealId) => {
    removeMealLS(mealId);
    fetchFavMeals();
  };

  return (
    <div className="favorite-meals">
      <h2>Favorite Meals</h2>
      <div className="meal-card-list">
        {favoriteMeals.length > 0 ? (
          favoriteMeals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              showDetailsButton
              removeMeal={() => removeMeal(meal.idMeal)}
              showLikeButton={false}
              smallerCard
            />
          ))
        ) : (
          <p>No favorite meals found.</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteMeals;
