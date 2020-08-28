import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HDyY5EryaVdYC4TOEJyI8m0CXRQRlTm1ubYDSSklsENc7K4Jm2XKvejMHI8Qp698Q17iuIzz0FpoTXCRaSrk19G00Y5MdB9dk';

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Store Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
