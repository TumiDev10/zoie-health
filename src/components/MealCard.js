import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { saveMealLS } from "../utils/localStorage";
import "./MealCard.css";

function MealCard({ meal, showDetailsButton, removeMeal, showLikeButton, smallerCard }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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
    setShowMessage(true);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`meal-card ${smallerCard ? "meal-card--small" : ""}`}>
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
            <Button variant="danger" onClick={removeMeal} style={{backgroundColor: '#A77FB9'}}>
              Remove
            </Button>
          )}
          {showLikeButton && (
            <Button variant="primary" onClick={handleLikeClick} style={{backgroundColor: '#A77FB9'}}>
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
      {showMessage && (
        <Alert variant="success" className="meal-card__message">
          Meal added to favorites!
        </Alert>
      )}
    </div>
  );
}

export default MealCard;
