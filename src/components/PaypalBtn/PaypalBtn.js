import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
 
  render() {
    const { clearCart, history, onPaymentSuccess, onPaymentError } = this.props

    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
      clearCart()
      history.push('/');
      onPaymentSuccess()
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      onPaymentError()
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
    
      console.log("Error!", err);
      
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: "AQ_CO8Dq6LF8A-QK_VK67Y2oglB4EMeZ3JXGyORfsWYuJ3_Vn6t5UzOyAjXUyjfOSxboictq-NRLScsD",
      production: "YOUR-PRODUCTION-APP-ID"
    };
    
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
