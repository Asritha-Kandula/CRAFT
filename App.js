import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [page, setPage] = useState('products');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="App">
      <header>
        <h1>Craft By Rajamatha</h1>
        <p className="slogan">
          Small additions can make your look even more beautiful
        </p>
        <nav>
          <button onClick={() => setPage('products')}>Products</button>
          <button onClick={() => setPage('cart')}>
            Cart ({cart.length})
          </button>
        </nav>
      </header>

      <main>
        {page === 'products' && <Products addToCart={addToCart} />}
        {page === 'cart' && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            setPage={setPage}
          />
        )}
        {page === 'checkout' && (
          <Checkout
            cart={cart}
            clearCart={clearCart}
            setPage={setPage}
          />
        )}
      </main>

      <footer>
        <small>© 2025 Craft By Rajamatha</small>
      </footer>
    </div>
  );
}

export default App;
