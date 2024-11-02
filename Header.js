import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">
        Cart ({totalItems})
      </Link>
    </header>
  );
}

export default Header;