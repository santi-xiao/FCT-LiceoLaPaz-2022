import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {

    const [cart, setCart] = useOutletContext();
    const [price, setPrice] = useState(0);

    useEffect(()=> {
        let totalamount = price;
        cart.products.map(p =>{
            totalamount += p.precio;
        })
        return setPrice(totalamount);
    },[])

    return(
        <>
            <h1>Checkout</h1>
            <p>{price}€</p>
            { !cart.products.length > 0 ? <p className='subtitle'>There are no products in the cart</p>: 
                        cart.products.map(product => {
                            return (
                               <dl className='dlProductContainer' key={product.id}>
                                    <img src={product.imagenDni} alt={product.nombre} width="100px" height="100px" style={{float: 'left'}} />
                                    <dt style={{textAlign:'center'}}>{product.nombre}</dt>
                                    <dt className='subtitle no-margin'>{product.precio}€</dt>
                                    <dd className='avatar bg-red'>
                                 </dd>
                               </dl>
                            )
                        })
                    }
            <PayPalScriptProvider options={{"client-id": "AeE-v1TjkR_wTmIj72JVIPQ5vmw64tZlFcgYt_8IQ1JYOW2nr6EWy_9Px9qotsIHjh5HIuvPrW9E3F4X"}}>
                <PayPalButtons style={{layout: "horizontal"}}/>
            </PayPalScriptProvider>

        </>
    )
}

export default Checkout;