import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { getMealById } from "../utils/localStorage";

function MealDetails({ match }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const mealId = match.params.id;
    getMealById(mealId).then((meal) => setMeal(meal));
  }, [match.params.id]);

  return (
    <div>
      {meal ? (
        <div>
          <h2>{meal.strMeal}</h2>
          <MealCard meal={meal} showLikeButton={true} />
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
}

export default MealDetails;
