import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import MealCard from "./MealCard";
import "./SearchForm.css";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMeals();
  };

  const searchMeals = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    const meals = data.meals;
    setSearchResults(meals || []);
  };

  return (
    <div className="search-form">
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          className="search-form__input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button
          className="search-form__submit-button"
          type="submit"
          variant="primary"
        >
          Search
        </Button>
      </Form>

      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul className="search-results__list">
            {searchResults.map((meal) => (
              <li key={meal.idMeal} className="search-results__item">
                <MealCard meal={meal} showDetailsButton />
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default SearchForm;
