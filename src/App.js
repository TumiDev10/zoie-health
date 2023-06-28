import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import RandomMeal from "./components/RandomMeal";
import FavoriteMeals from "./components/FavoriteMeals";
import MealDetails from "./components/MealDetails";
import AllRecipes from "./components/AllRecipes";
import logo from "./img/zoie.png";
import background from './img/background.jpeg'
import "./App.css";

function App() {
  return (
    <Router >
      <Navbar expand="lg" style={{ backgroundColor: 'rgb(243 230 238)'}}>
        <Navbar.Brand href="/">
          <img src={logo} alt="Zoie Health Logo" className="logo-image" style={{ width: '15%', marginLeft: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"  >
            <NavLink exact to="/" className="nav-link" style={{marginLeft: '-70%'}} activeClassName="active-tab">
              Home
            </NavLink>
            <NavLink to="/favorites" className="nav-link" style={{marginLeft: '30%'}} activeClassName="active-tab">
              Favorites
            </NavLink>
            <NavLink to="/allrecipes" className="nav-link" style={{ marginLeft: '30%' }} activeClassName="active-tab">
              Recipes
            </NavLink>
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
