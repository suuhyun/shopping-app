import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetails = async () => {
    const url = `https://my-json-server.typicode.com/suuhyun/shopping-app/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className="grid lg:grid-cols-6 gap-6 mb-10">
      <img
        className="lg:col-span-2 lg:col-start-2 w-full"
        src={product?.img}
        alt=""
      />
      <div className="lg:col-span-2 lg:col-start-4">
        <div className="text-sm font-thin mb-2">
          {product?.new ? "new" : ""}
        </div>
        <div>{product?.title}</div>
        <div>${product?.price}</div>
        <hr className="my-3" />
        <div>Size</div>
        <div className="my-2">
          {product?.size.map((size) => (
            <button className="border-2 rounded-lg px-3 py-1 mr-2 text-sm hover:bg-gray-200 transition ease">
              {size}
            </button>
          ))}
        </div>
        <button className="w-full bg-black text-white p-2.5 my-2 hover:drop-shadow-xl">
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
