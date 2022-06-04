import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Survivors from "./Components/Survivors";
import Killers from "./Components/Killers";
import Cart from "./Components/Cart";
import KeysGenerator from "./Components/KeysGenerator";
import ProductDetail from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="survivors" element={<Survivors />} />
            <Route path="killers" element={<Killers />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/keys" element={<KeysGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
