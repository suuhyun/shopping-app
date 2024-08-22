import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/suuhyun/shopping-app/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {productList.map((item) => (
        <div className="col-span-1">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductAll;
