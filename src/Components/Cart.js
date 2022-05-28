import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';

const Cart = () => {

    const [cart, setCart] = useOutletContext()

    const [price, setPrice] = useState(0);
    
    
    // const calculatePrice = () =>{
    //     let totalPrice = 0;
    //     cart.products.map(p => {
    //         totalPrice += p.precio;
    //        return  totalPrice;
    //     })
    // }

    useEffect(() => {
        cart.products.map(p => {
            setPrice(price + p.precio)
        })
    }, [cart]);

    return(
        <>
            <h1>Cart</h1>
            <div className='cartMainContainer'>
                { !cart.products > 0 ? <p className='subtitle'>There are no products in the cart</p>: 
                    cart.products.map(product => {
                        return (
                            <div className='cartProductContainer' key={product.id}>
                                <img src={product.imagenDni} alt={product.nombre} width="100px" height="100px" style={{float: 'left'}} />
                                <p style={{textAlign:'center'}}>{product.nombre}</p>
                                <p className='subtitle'>{product.precio}€</p>
                            </div>
                        )
                    })
                 }
                 <div className='cartPriceCountContainer'>
                    <p className='title border-bottom'>Price</p>
                    <p className='cartPrice'>{price}€</p>
                    <div className='btn'>
                        <p>To Checkout</p>
                    </div>
                 </div>
            </div>
        </>
    )
}

export default Cart;