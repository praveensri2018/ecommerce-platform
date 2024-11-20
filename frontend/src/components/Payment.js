import React from 'react';

function Payment() {
    const handlePayment = () => {
        alert('Payment processed!');
    };

    return (
        <div>
            <h2>Payment</h2>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}

export default Payment;
