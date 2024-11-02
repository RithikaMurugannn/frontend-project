export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';

export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const increaseItem = (id) => ({
  type: INCREASE_ITEM,
  payload: id,
});

export const decreaseItem = (id) => ({
  type: DECREASE_ITEM,
  payload: id,
});