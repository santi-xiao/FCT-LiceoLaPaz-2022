import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Components/HeaderNav';


const Layout = () =>{
    return(
        <div className='layout'>
        <div className='nav'>
            <HeaderNav/>
        </div>
        <div className='main'>
            <Outlet/>
        </div>
        </div>
    )
}

export default Layout;