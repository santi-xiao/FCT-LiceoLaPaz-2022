import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Cart = () => {

    const [cart, setCart] = useOutletContext()
    console.log(cart.products);
 
    return(
        <>
            <h1>Cart Component</h1>
        </>
    )
}

export default Cart;