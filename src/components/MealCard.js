import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { saveMealLS } from "../utils/localStorage";
import "./MealCard.css";

function MealCard({ meal, showDetailsButton, removeMeal, showLikeButton }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal["strIngredient" + i]) {
      ingredients.push(
        `${meal["strIngredient" + i]} - ${meal["strMeasure" + i]}`
      );
    } else {
      break;
    }
  }

  const handleLikeClick = () => {
    saveMealLS(meal.idMeal);
  };

  return (
    <div className="meal-card">
      <div className="meal-card__header">
        <img
          className="meal-card__image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="meal-card__buttons">
          {showDetailsButton && (
            <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary">
              View Details
            </Link>
          )}
          {removeMeal && (
            <button className="btn btn-danger" onClick={removeMeal}>
              Remove
            </button>
          )}
          {showLikeButton && (
            <button className="btn btn-primary" onClick={handleLikeClick}>
              Like
            </button>
          )}
        </div>
      </div>
      <div className="meal-card__body">
        <h4 className="meal-card__title">{meal.strMeal}</h4>
        <h5 className="meal-card__subtitle">Ingredients:</h5>
        <ul className="meal-card__ingredient-list">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="meal-card__ingredient-item">
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="meal-card__instructions">{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealCard;
