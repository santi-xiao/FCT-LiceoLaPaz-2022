import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const KeysGenerator = () => {
  const [cart, setCart] = useOutletContext();
  const [showKey, setShowKey] = useState(false);
  const navigation = useNavigate();

  const generateKey = (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleGoBack = () => {
    setCart({
      products: [],
    });

    localStorage["cart"] = { products: [] };
    navigation("/");
  };

  return (
    <>
      <h1>Activate your products</h1>
      <div>
        <p>Thank you for purchasing our products. We hope to see you again!</p>
      </div>
      {cart.products.map((product) => (
        <dl className="dlProductContainer" key={product.id}>
          <img
            src={product.imagenDni}
            alt={product.nombre}
            width="100px"
            height="100px"
            style={{ float: "left" }}
          />
          <dt style={{ textAlign: "center" }}>{product.nombre}</dt>
          {!showKey ? (
            <dt>KEY</dt>
          ) : (
            <dt>
              KEY: <span className="key-value">{generateKey(20)}</span>
            </dt>
          )}
        </dl>
      ))}
      {!showKey ? (
        <div
          className="btn center-margin-2rem"
          onClick={() => setShowKey(true)}
          style={{ cursor: "pointer" }}
        >
          <p>Show key/s</p>
        </div>
      ) : (
        <>
          <p className="subtitle">Have fun playing Dead By Dayligth</p>
          <div onClick={() => handleGoBack()} style={{ cursor: "pointer" }}>
            <p className="subtitle" style={{ fontWeight: "bold" }}>
              Go to the main page
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default KeysGenerator;
