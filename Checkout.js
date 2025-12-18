import React, { useState } from 'react';

function Checkout({ cart, clearCart, setPage }) {
  const [paid, setPaid] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePay = () => {
    setPaid(true);
    clearCart();
  };

  if (paid) {
    return (
      <section className="checkout">
        <h2>Thank you for your order!</h2>
        <button onClick={() => setPage('products')}>Back to Products</button>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
      <button onClick={handlePay}>Pay & Place Order</button>
    </section>
  );
}

export default Checkout;
