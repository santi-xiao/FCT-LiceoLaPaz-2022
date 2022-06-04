import React from "react";
import { useOutletContext } from "react-router-dom";

const KeysGenerator = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <h1>KeysGenerator</h1>;
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
          <dt className="subtitle no-margin">{product.precio}€</dt>
          <dt>adkjaksdjhaksdjh</dt>
        </dl>
      ))}
    </>
  );
};

export default KeysGenerator;
