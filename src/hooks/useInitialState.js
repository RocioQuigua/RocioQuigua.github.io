import { useState } from "react";

export const initialState = {
  cart: [],
}

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, {...payload, idCart: state.cart.length + 1}],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.idCart !== payload.idCart ),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart
  };
};