import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Components/HeaderNav';


const CartContext = createContext();


const Layout = () =>{
    const [cart, setCart] = useState({});

    return(
        <CartContext.Provider value={cart}>
        <div className='layout'>
        <div className='nav'>
            <HeaderNav/>
        </div>
        <div className='main'>
            <Outlet/>
        </div>
        </div>
        </CartContext.Provider>
    )
}

export default Layout;