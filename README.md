# **React App**
This repository contains a React app that showcases the basic setup and structure of a React application. Follow the instructions below to run the app on your local machine.

Prerequisites
Before running the React app, ensure that you have the following software installed:

-Node.js (version 10 or above)
-npm (Node Package Manager, usually installed along with Node.js)

**Getting Started**
1. Clone this repository to your local machine using Git or download it as a ZIP file and extract it.
-git clone <https://github.com/TumiDev10/zoie-health>

2. Open a terminal or command prompt and navigate to the project's root directory.
-cd react-app

3. Install the dependencies using npm.
-npm install

4. Once the installation is complete, start the development server.
-npm start
 
5. The app should now be running locally. Open your web browser and visit http://localhost:3000 to view it.

**Folder Structure**
The project structure is organized as follows:

a. public: Contains the HTML template and static assets.

b. src: Contains the React components and application logic.
  1. components: Contains reusable UI components.
  2. App.js: The root component of the application.
  3. index.js: The entry point of the application.
  4. AllRecipes.js
  5. FavoriteMeals.js
  6. Home.js
  7. MealCard.js
  8. MealDetails.js
  9. RandomMeal.js
  10. SearchForm.js
 
 c. utils: contains a local Storage that acts as a database
 -localStorage.js

 d. img contains images that were used througout the project
 

** Instrucctions on how to use the app: **
 1. THe navbar will show a purple color when the tab is pressed
 2. The Home pae is only for random meals, you can press the "Get New Meal" buton to get new random meals
 3. The "View Details" button displays the ingredients
 4. The heart icon adds the meal to "favorites", the heart will be red when the meal is added and it will display a message box.
 5. ThE Favorites page consists of all the meals you liked, you can press the "X" button to remove the meal from favorites.
 6. The Recipe page is where you search for the meals you want. You can search buy letter or name of the meal (eg: Chicken) 

 ![Zoie Health Recipe](img/Readme.png)
