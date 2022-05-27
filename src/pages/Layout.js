import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Components/HeaderNav';




const Layout = () =>{
    const [cart, setCart] = useState({
        products: [
            
        ]
    });

    return(
        <div className='layout'>
        <div className='nav'>
            <HeaderNav/>
        </div>
        <div className='main'>
            <Outlet context={[cart, setCart]} />
        </div>
        </div>
    )
}

export default Layout;