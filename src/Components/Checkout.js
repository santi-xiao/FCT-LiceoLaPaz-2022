import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {

    const [cart, setCart] = useOutletContext();

    // form states
    const [user, setUser] = useState(null);
    const [name,setName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) =>{
        setUser({user : {nombre: name, apellido: secondName, direccion: address, telefono: phone, email: email}})
        console.log(user);
        e.preventDefault();
    }
    
    useEffect(()=>{
        console.log(user);
    }, [user])
    
    
    // PAYPAL
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
            <div className='formContainer'>
                <form id='form' onSubmit={e => {handleSubmit(e)}}>
                    <div className='input-control'>
                    <label for="name-input">Name</label>
                    <input id="name-input" name='name' placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <div className='input-error'></div>
                    </div>
                    <div className='input-control'>
                    <label for="secondName-input">SecondName</label>
                    <input id="secondName-input" name='secondName' placeholder='Second Name' type="text" value={secondName} onChange={e => setSecondName(e.target.value)} />
                    <div className='input-error'></div>
                    </div>
                    <div className='input-control'>
                    <label for="address-input">Address</label>
                    <input id="address-input" name='address' placeholder='Address' type="text" value={address} onChange={e => setAddress(e.target.value)} />
                    <div className='input-error'></div>
                    </div>
                    <div className='input-control'>
                    <label for="phone-input">Phone</label>
                    <input id="phone-input" name='phone' placeholder='Phone' type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                    <div className='input-error'></div>
                    </div>
                    <div className='input-control'>
                    <label for="email-input">Email</label>
                    <input id="email-input" name='email' placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <div className='input-error'></div>
                    </div>      
                    <button className='btn' type="submit">Save</button>              
                </form>
            </div>
    
            <PayPalScriptProvider options={{"client-id": "AeE-v1TjkR_wTmIj72JVIPQ5vmw64tZlFcgYt_8IQ1JYOW2nr6EWy_9Px9qotsIHjh5HIuvPrW9E3F4X"}}>
                <PayPalButtons style={{layout: "horizontal"}} createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>
    
        </>
    )
}




export default Checkout;