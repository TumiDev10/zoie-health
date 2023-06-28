import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import RandomMeal from "./components/RandomMeal";
import FavoriteMeals from "./components/FavoriteMeals";
import MealDetails from "./components/MealDetails";
import AllRecipes from "./components/AllRecipes";
import logo from "./img/zoie.jpeg";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Zoie Health Logo" className="logo-image" style={{width: '15%', marginLeft: '10px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
            <Link to="/allrecipes" className="nav-link">
              Recipes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={RandomMeal} />
          <Route path="/favorites" component={FavoriteMeals} />
          <Route path="/meal/:id" component={MealDetails} />
          <Route path="/allrecipes" component={AllRecipes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
