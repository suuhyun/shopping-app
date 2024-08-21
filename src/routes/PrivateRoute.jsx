import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <ProductDetails /> : <Navigate to="/login" />;
};

export default PrivateRoute;
