import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating">⭐⭐⭐⭐</div>
        </div>
        <img src="https://m.media-amazon.com/images/I/614+seJKAGL._AC_UX569_.jpg" alt="a bag"/>
      </div>
    </div>
  );
}

export default Product;