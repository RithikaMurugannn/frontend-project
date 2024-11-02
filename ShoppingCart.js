import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseItem, decreaseItem } from '../redux/actions/cartActions';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(increaseItem(item.id))}>Increase</button>
          <button onClick={() => dispatch(decreaseItem(item.id))}>Decrease</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <p>Total Items: {cart.length}</p>
      <p>Total Cost: ${totalCost}</p>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button onClick={() => window.history.back()}>Continue Shopping</button>
    </div>
  );
}

export default ShoppingCart;