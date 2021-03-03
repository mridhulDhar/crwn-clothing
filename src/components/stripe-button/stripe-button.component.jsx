import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IR0OGKliepRSECLJUDbCmRqPfMh2rphPYhJX60u95WwFWZtCgP0qWYxpoQYhhV3VxWxfr0Do8yOW4A1DUlIK5Fr00QSDhTav2';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTHING'
            billingAddress
            shipingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >

        </StripeCheckout>
    );
};

export default StripeCheckoutButton;