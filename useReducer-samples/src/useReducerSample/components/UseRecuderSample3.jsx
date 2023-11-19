import React, {useReducer} from 'react'
import CartReducer from '../reducers/CartReducer';
import '../../App.css';

function UseRecuderSample3() {
    const [state, dispatch] = useReducer(CartReducer, { cartItems: [] });

    const products = [
      { id: 1, name: 'Ürün 1', price: 20 },
      { id: 2, name: 'Ürün 2', price: 30 },
      { id: 3, name: 'Ürün 3', price: 25 }
    ];
  
    const addToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', product });
    };
  
    const removeFromCart = (productId) => {
      dispatch({ type: 'REMOVE_FROM_CART', productId });
    };
  
    return (
      <div className='App'>
        <h2>Sepetim</h2>
        <ul>
          {state.cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Sil</button>
            </li>
          ))}
        </ul>
        <h2>Ürünler</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Sepete Ekle</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UseRecuderSample3
