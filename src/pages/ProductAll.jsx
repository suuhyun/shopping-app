import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = `http://localhost:4000/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div className="grid grid-cols-4 gap-6">
    {productList.map((item) => <div className="col-span-1"><ProductCard item={item}/></div>)}
  </div>;
};

export default ProductAll;
