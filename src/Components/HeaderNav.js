import React from 'react'
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className='nav_container'>
            <div className='nav_title'>
            <Link to="/">
                <img alt='logo' src={require('../images/logo.png')} width="60px" height="60px" />
            </Link>
                <div className='title'>Store By Daylight</div>
                <div className='subtitle'>Unofficial Dead By Daylight Store. Made by a fan for the fans</div>
            </div>
            <div className='nav_links'>
                <Link to="/products/survivors">Survivors</Link>
                <Link to="/products/killers">Killers</Link>
            </div>
        </div>
    )
}

export default HeaderNav;