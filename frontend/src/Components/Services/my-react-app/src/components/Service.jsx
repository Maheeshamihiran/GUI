Here are the contents for the file: /my-react-app/my-react-app/src/components/Payment.jsx

import React from 'react';

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <form>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;