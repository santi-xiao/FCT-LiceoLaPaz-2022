import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const HeaderNav = ({ cart }) => {
  const getYear = () => {
    let today = new Date();
    let year = today.getFullYear();
    return year;
  };

  return (
    <div className="nav_container">
      <div className="nav_title">
        <Link to="/">
          <img
            alt="logo"
            src={require("../images/logo.png")}
            width="60px"
            height="60px"
          />
        </Link>
        <div className="title">Store By Daylight</div>
        <div className="subtitle">
          Unofficial Dead By Daylight Store. Made by a fan for the fans
        </div>
      </div>
      <div className="nav_links">
        <Link to="survivors">Survivors</Link>
        <Link to="killers">Killers</Link>
        <Link to="cart">
          <Badge badgeContent={cart.products.length} color="error">
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
          </Badge>
        </Link>
      </div>
      <div className="nav_footer">
        <p className="subtitle">© Copyright {getYear} | Santiago Xiao</p>
      </div>
    </div>
  );
};

export default HeaderNav;
