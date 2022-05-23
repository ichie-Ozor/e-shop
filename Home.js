import React from 'react'
import "./Home.css"
import ecommerce2Image from "./img/ecommerce5.jpg";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src={ecommerce2Image} alt="" className="home__img" />
          <div className="home_row">
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home