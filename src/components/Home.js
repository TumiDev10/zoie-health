import React from "react";
import { FaUtensils, FaCalendarAlt, FaBookOpen, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Home.css";
import RandomMeal from "./RandomMeal";

function Home() {
  return (
    <div className="container-fluid vh-60 d-flex flex-column align-items-center">
      <div className="row h-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              src="https://zoiehealth.com/wp-content/uploads/2022/05/headerimage-1phone-header-1024x751.png"
              alt="Header Image"
              className="img-fluid rounded"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
            <a href="/RandomMeal" className="btn btn-primary mt-3">Discover Recipes</a>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="text-center text-md-left">
            <h1 className="display-4">Your all-in-one recipe app for the kitchen</h1>
            <p className="lead">
              Explore delicious recipes, plan your meals, and discover new cooking techniques – all in one app.
            </p>

            <div className="card" style={{ backgroundColor: "rgb(243, 230, 238)" }}>
              <div className="icon-container">
                <FaBookOpen className="icon" />
              </div>
              <div className="text-container">
                <h3>Discover Recipes</h3>
                <p>Browse through a wide variety of delicious recipes from around the world.</p>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: "rgb(243, 230, 238)" }}>
              <div className="icon-container">
                <FaCalendarAlt className="icon" />
              </div>
              <div className="text-container">
                <h3>Plan Your Meals</h3>
                <p>Organize your meals for the week and create shopping lists with ease.</p>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: "rgb(243, 230, 238)" }}>
              <div className="icon-container">
                <FaUtensils className="icon" />
              </div>
              <div className="text-container">
                <h3>Learn Cooking Techniques</h3>
                <p>Explore new cooking techniques and improve your culinary skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="icon" />
                </a>
                <a href="https://www.instagram.com/zoiehealth/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/zoie-health/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/zoie-health/" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="icon" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <p>Email: support@zoiehealth.com</p>
              <p>Phone: +27 67 114 1484</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
