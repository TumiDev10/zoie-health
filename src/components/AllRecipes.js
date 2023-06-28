import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import SearchForm from "./SearchForm";
import "./AllRecipes.css";

function AllRecipes() {
  const [recipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterRecipes(searchTerm);
  };

  const filterRecipes = (searchTerm) => {
    if (!searchTerm) {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm)
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="all-recipes">
      <h2>Search for your favourite Recipes</h2>
      <SearchForm searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="meal-card-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              showDetailsButton
              smallerCard
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default AllRecipes;
