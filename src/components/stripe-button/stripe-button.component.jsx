import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51LvE3QKSFKk4Jcj9kM2fH2re5W2QWubxLppBLO8a4UFpdqjAVqhGv7k4qzUZsfFhi7YPez9SUCNUrROwcpefaFPg00pJStmVqF';

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Online Store'
      billingAddress
      shippingAddress
      image='https://upload.wikimedia.org/wikipedia/commons/c/c9/Online-shop_button.jpg?20150302070533'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;