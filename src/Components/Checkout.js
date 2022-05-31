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

    const calculateAmount = () => {
        let totalamount = price;
        cart.products.map(p =>{
            totalamount += p.precio;
        })
        return totalamount;
    }

    // paypal 
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    useEffect(() => {
        if (success) {
          console.log("Payment successful!!");
        }
      },
      [success]
    );
   
   console.log(1, orderID);
   console.log(2, success);
   console.log(3, ErrorMessage);

    // creates a paypal order
 const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "StoreByDaylightPayment",
            amount: {
              currency_code: "USD",
              value: 40,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };


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
                <PayPalButtons style={{layout: "horizontal"}} createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>

        </>
    )
}


export default Checkout;