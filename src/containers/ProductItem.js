import React from "react";

import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { id, title, image, description, category, price } = product;
  console.log(product);
  return (
    <div className="column">
      <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title || ""} />
            </div>
            <div className="content">
              <div className="header">{title || ""}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
