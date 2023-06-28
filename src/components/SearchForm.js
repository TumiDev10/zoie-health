import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import MealCard from "./MealCard";

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
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="outline-primary">
          Search
        </Button>
      </Form>

      <div className="mt-4">
        {searchResults.length > 0 ? (
          searchResults.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} showDetailsButton />
          ))
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchForm;
