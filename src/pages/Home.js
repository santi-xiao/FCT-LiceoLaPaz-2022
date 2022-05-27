import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
            <h1>home page</h1>
            <Link to="survivors">Survivors</Link>
            <Link to="killers">Killers</Link>
        </>
    ) 
}

export default Home;
