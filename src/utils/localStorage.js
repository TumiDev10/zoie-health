export function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
    return mealIds === null ? [] : mealIds;
  }
  
  export async function getMealById(id) {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
  }
  
  export function saveMealLS(mealId) {
    const mealIds = getMealsLS();
    const updatedMealIds = [...mealIds, mealId];
    localStorage.setItem("mealIds", JSON.stringify(updatedMealIds));
  }
  
  export function removeMealLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem(
      "mealIds",
      JSON.stringify(mealIds.filter((id) => id !== mealId))
    );
  }
  