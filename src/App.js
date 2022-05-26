import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Layout from './pages/Layout';
import Survivors from './Components/Survivors';
import Killers from './Components/Killers'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import ProductDetail from './pages/ProductDetails';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products/>}>
            <Route path='survivors' element={<Survivors/>}/>
            <Route path='killers' element={<Killers/>}/>
            <Route path=':id' element={<ProductDetail/>}/>
          </Route>
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
