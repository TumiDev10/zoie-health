import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { saveMealLS } from "../utils/localStorage";
import "./MealCard.css";

function MealCard({ meal, showDetailsButton, removeMeal, showLikeButton }) {
  const [showDetails, setShowDetails] = useState(false);

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

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
            <Button variant="primary" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </Button>
          )}
          {removeMeal && (
            <Button variant="danger" onClick={removeMeal}>
              Remove
            </Button>
          )}
          {showLikeButton && (
            <Button variant="primary" onClick={handleLikeClick}>
              Like
            </Button>
          )}
        </div>
      </div>
      <div className="meal-card__body">
        <h4 className="meal-card__title">{meal.strMeal}</h4>
        {showDetails && (
          <>
            <h5 className="meal-card__subtitle">Ingredients:</h5>
            <ul className="meal-card__ingredient-list">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="meal-card__ingredient-item">
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="meal-card__instructions">{meal.strInstructions}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default MealCard;
