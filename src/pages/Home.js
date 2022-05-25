import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
            <h1>home page</h1>
            <Link to="products/survivors">Survivors</Link>
            <Link to="products/killers">Killers</Link>
        </>
    ) 
}

export default Home;
