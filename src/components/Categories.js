import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";

function CategoriesPage() {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
  
    return (
      <div>
        <h1>Categories</h1>
        <div className="category-list">
          {categories.map((category) => (
            <div key={category.idCategory} className="category-item">
              <h2>{category.strCategory}</h2>
              <p>{category.strCategoryDescription}</p>
              <div className="meal-cards">
                {category.meals ? (
                  category.meals.map(async (meal) => {
                    try {
                      const mealResponse = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
                      );
                      const mealData = mealResponse.data.meals[0];
                      return (
                        <MealCard
                          key={mealData.idMeal}
                          meal={mealData}
                          showDetailsButton
                        />
                      );
                    } catch (error) {
                      console.log(
                        `Error fetching meal with ID ${meal.idMeal}:`,
                        error
                      );
                      return null;
                    }
                  })
                ) : (
                  <p>No meals found for this category.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default CategoriesPage;
