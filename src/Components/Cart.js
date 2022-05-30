import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = () => {

    const [cart, setCart] = useOutletContext()

    const removeFromCart = (id) =>{
        let cartCopy = cart.products;
        let filteredCart = cartCopy.filter(p => p.id !== id);
        cartCopy = {products : filteredCart}
        setCart(cartCopy);
    }

    const [price, setPrice] = useState(0);

    useEffect(() => {
        let finalPrice = 0;
            cart.products.map(p => {
               finalPrice += p.precio;
               setPrice(finalPrice)
            })
        return;
    }, [cart]);

    return(
        <>
            <h1>Cart</h1>
            <div className='cartMainContainer'>
                <div className='cartProductContainer'>
                    { !cart.products > 0 ? <p className='subtitle'>There are no products in the cart</p>: 
                        cart.products.map(product => {
                            return (
                               <dl className='dlProductContainer' key={product.id}>
                                    <img src={product.imagenDni} alt={product.nombre} width="100px" height="100px" style={{float: 'left'}} />
                                    <dt style={{textAlign:'center'}}>{product.nombre}</dt>
                                    <dt className='subtitle no-margin'>{product.precio}€</dt>
                                    <dd className='avatar bg-red'>
                                    <div className='avatar-image' onClick={() => removeFromCart(product.id)}>
                                     <DeleteForeverIcon sx={{color: 'white'}}/> 
                                    </div>
                                 </dd>
                               </dl>
                            )
                        })
                    }
                </div>
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