import React from "react";
import "../components/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
          alt=""
          className="home__image"
        />
      </div>
      <div className="home__row">
        <Product />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
};

export default Home;
