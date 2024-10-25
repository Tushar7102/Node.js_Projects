import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="header">
      <nav className="toolbar">
        <NavLink
          to="/"
          className="logo-link"
          onClick={() => setActiveTab("")}
        >
          <span className="logo-icon">📚</span>
          <span>Book Store</span>
        </NavLink>
        <div className="tabs">
          <NavLink
            to="/add"
            className={`tab ${activeTab === "add" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("add")}
          >
            Add Product
          </NavLink>
          <NavLink
            to="/books"
            className={`tab ${activeTab === "books" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("books")}
          >
            Books
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
