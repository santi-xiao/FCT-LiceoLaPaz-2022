import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../Components/HeaderNav";

const Layout = () => {
  const cacheCart = localStorage["cart"];

  const products = {
    products: [],
  };

  const cacheCartExist = () => {
    if (cacheCart) return JSON.parse(cacheCart);
    else return products;
  };

  const [cart, setCart] = useState(() => cacheCartExist());

  return (
    <div className="layout">
      <div className="nav">
        <HeaderNav cart={cart} />
      </div>
      <div className="main">
        <Outlet context={[cart, setCart]} />
      </div>
    </div>
  );
};

export default Layout;
