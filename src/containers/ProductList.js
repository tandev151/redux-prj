import React, { useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { setProducts } from "../redux/actions/product-action";
import { useDispatch, useSelector } from "react-redux";
const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (response) {
      dispatch(setProducts(response.data));
    } else {
      dispatch(setProducts([]));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="ui grid container">
      <div className="ui four column doubling stackable grid container">
        {products?.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
