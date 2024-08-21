import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/product/${item.id}`)
    }
  return (
    <div className="trasition ease-in-out hover:scale-110 hover:mx-3" onClick={showDetails}>
      <img src={item?.img} alt="" />
      <div className="text-xs mt-1">{item?.choice ? "Conscious choice" : ""}</div>
      <div className="truncate ...">{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new ? "new" : ""}</div>
    </div>
  );
};

export default ProductCard;
