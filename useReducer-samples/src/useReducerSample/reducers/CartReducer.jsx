const CartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { 
          ...state, 
          cartItems: [...state.cartItems, action.product] 
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.productId)
        };
      default:
        return state;
    }
  };
  export default CartReducer