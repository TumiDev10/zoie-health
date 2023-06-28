import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import SearchForm from "./SearchForm";
import "./AllRecipes.css";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchRandomRecipes();
//   }, []);

//   const fetchRandomRecipes = async () => {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/random.php"
//     );
//     const data = await response.json();
//     const meals = data.meals;
//     setRecipes(meals || []);
//     setFilteredRecipes(meals || []);
//   };

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
