import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

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
    let finalPrice = 0;
    cart.products.map((p) => {
      finalPrice += p.precio;
    });
    return setPrice(finalPrice);
  }, [cart]);

  // PAYPAL
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);

  useEffect(() => {
    if (success) {
      console.log("Payment successful!!");
    }
  }, [success]);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "StoreByDaylightPayment",
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function () {
      setSuccess(true);
    });
  };

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
              }}
            >
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </PayPalScriptProvider>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
