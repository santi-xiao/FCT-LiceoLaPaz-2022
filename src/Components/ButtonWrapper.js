import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

// This values are the props in the UI
const amount = "2";
const currency = "EUR";
const style = { layout: "vertical" };

const ButtonWrapper = ({ amount, showSpinner }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        amount: amount,
      },
    });
  }, [amount, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            navigation("/keys");
          });
        }}
      />
    </>
  );
};

export default ButtonWrapper;
