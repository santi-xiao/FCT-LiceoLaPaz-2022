import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetail = () => {
  const [cart, setCart] = useOutletContext();
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/productos/producto/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addProductToCart = (p) => {
    let cartCopy = cart.products;

    if (cartCopy.length === 0) {
      cartCopy = { products: [product] };
      setCart(cartCopy);
      return;
    }

    if (cartCopy.find((prod) => prod.id === p.id)) {
      alert("ya está en el carrito");
      return;
    }

    if (cartCopy.length > 0) {
      cartCopy = { products: [product, ...cart.products] };
      setCart(cartCopy);
      return;
    }
  };

  return (
    <>
      {!product ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{product.nombre}</h1>
          <div className="detailsContainer">
            <div className="imageContainer">
              <img src={product.imagenCuerpo} alt={product.nombre} />
            </div>
            <div className="otherContainer">
              <div className="infoContainer">
                <p>
                  <span>Name: </span>
                  {product.nombre}
                </p>
                <p>
                  <span>Category: </span>
                  {product.categoria.nombre}
                </p>
                <p>
                  <span>Description: </span>
                  {product.descripcion}
                </p>
                <p>
                  <span>Price: </span>
                  {product.precio} €
                </p>
              </div>
              <div className="btn" onClick={() => addProductToCart(product)}>
                <AddShoppingCartIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
