import React from 'react';

function Cart({ cart, removeFromCart, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={() => setPage('checkout')}>Checkout</button>
        </>
      )}
    </section>
  );
}

export default Cart;
