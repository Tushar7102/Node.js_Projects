import React from "react";
import { Link } from "react-router-dom"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="button-container">
        <Link to="/books" className="button-link">
          <h4 className="button-text" style={{color:"white"}}>View All Products</h4>
        </Link>
      </div>
    </div>
  );
};

export default Home;
