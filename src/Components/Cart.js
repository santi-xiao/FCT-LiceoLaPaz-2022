import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ButtonWrapper from "./ButtonWrapper";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const navigation = useNavigate();

  const removeFromCart = (id) => {
    let cartCopy = cart.products;
    let filteredCart = cartCopy.filter((p) => p.id !== id);
    cartCopy = { products: filteredCart };
    setCart(cartCopy);
  };

  const [price, setPrice] = useState(0);

  useEffect(() => {
    const calculateOrderPrice = () => {
      let finalPrice = 0;
      cart.products.map((p) => {
        finalPrice += p.precio;
      });
      return setPrice(finalPrice);
    };
    calculateOrderPrice();
  }, [cart]);

  return (
    <>
      <h1>Cart</h1>
      <div className="cartMainContainer">
        <div className="cartProductContainer">
          {!cart.products.length > 0 ? (
            <p className="subtitle">There are no products in the cart</p>
          ) : (
            cart.products.map((product) => {
              return (
                <dl className="dlProductContainer" key={product.id}>
                  <img
                    src={product.imagenDni}
                    alt={product.nombre}
                    width="100px"
                    height="100px"
                    style={{ float: "left" }}
                  />
                  <dt style={{ textAlign: "center" }}>{product.nombre}</dt>
                  <dt className="subtitle no-margin">{product.precio}€</dt>
                  <dd className="avatar bg-red">
                    <div
                      className="avatar-image"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <DeleteForeverIcon sx={{ color: "white" }} />
                    </div>
                  </dd>
                </dl>
              );
            })
          )}
        </div>
        <div className="cartPriceCountContainer">
          <p className="title border-bottom">Price</p>
          <p className="cartPrice">{price}€</p>
          {!cart.products.length > 0 ? (
            <div className="btn disabled">
              <p>Add products to cart</p>
            </div>
          ) : (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AeE-v1TjkR_wTmIj72JVIPQ5vmw64tZlFcgYt_8IQ1JYOW2nr6EWy_9Px9qotsIHjh5HIuvPrW9E3F4X",
                components: "buttons",
                currency: "EUR",
              }}
            >
              <ButtonWrapper amount={price} showSpinner={false} />
            </PayPalScriptProvider>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
