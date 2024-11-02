import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const plants = [
  { id: 1, category: 'Foliage', name: 'Monstera', price: 25, thumbnail: 'monstera.jpg' },
  { id: 2, category: 'Succulents', name: 'Aloe Vera', price: 15, thumbnail: 'aloe.jpg' },
  // Add four more plant objects here
];

function ProductListing() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      {['Foliage', 'Succulents', 'Flowering'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-category">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="plant">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    disabled={cart.some(item => item.id === plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {cart.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;