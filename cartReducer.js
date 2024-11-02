import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM } from '../actions/cartActions';

const initialState = {
  items: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case INCREASE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case DECREASE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;