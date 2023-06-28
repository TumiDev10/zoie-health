import React, { useState } from "react";
import { Button, Alert, Modal } from "react-bootstrap";
import { saveMealLS } from "../utils/localStorage";
import { FaHeart } from "react-icons/fa";
import "./MealCard.css";

function MealCard({ meal, showDetailsButton, removeMeal, showLikeButton, smallerCard }) {
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);

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
    setLiked(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemoveClick = () => {
    removeMeal();
    toggleModal();
  };

  return (
    <div className={`meal-card ${smallerCard ? "meal-card--small" : ""}`}>
      <div className="meal-card__header">
        <img
          className={`meal-card__image ${smallerCard ? "meal-card__image--small" : ""}`}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          onClick={toggleModal}
        />
      </div>
      <div className="meal-card__body">
        <h4 className="meal-card__title">{meal.strMeal}</h4>
        {showDetailsButton && (
          <Button variant="primary" onClick={toggleModal}>
            View Details
          </Button>
        )}
        {removeMeal && (
          <Button variant="danger" onClick={handleRemoveClick} style={{ backgroundColor: '#A77FB9', border: 'none', marginLeft: '36%' }}>
            X
          </Button>
        )}
        {showLikeButton && (
          <Button
            variant="primary"
            onClick={handleLikeClick}
            style={{ backgroundColor: '#A77FB9', border: 'none',  }}
          >
            <FaHeart color={liked ? "red" : "inherit"} />
          </Button>
        )}
      </div>
      {showMessage && (
        <Alert variant="success" className="meal-card__message">
          Meal added to favorites!
        </Alert>
      )}
      <Modal show={showModal} onHide={toggleModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{meal.strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="meal-card__modal-image"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <h5 className="meal-card__subtitle">Ingredients:</h5>
          <ul className="meal-card__ingredient-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="meal-card__ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="meal-card__instructions">{meal.strInstructions}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MealCard;

