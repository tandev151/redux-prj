import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../redux/actions/product-action";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const { id, category, description, price, title, image } = product;

  const getProductById = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(`Error: ${err}`);
        return null;
      });
    if (response && response.status === 200) {
      dispatch(selectProduct(response.data));
    }
  };

  useEffect(() => {
    if (productId) {
      getProductById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <span className="ui teal tag label">${price}</span>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
