
import { TYPES } from "../actions/ShoppingAction";
import products from "../records/ProductsLists/ProductLists.json";


export const shoppingInitialState = {
  cart: []
};

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      let newItem = products.find((product) => product.id === action.payload);
      console.log(newItem);
      // return 
    case TYPES.REMOVE_ONE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    case TYPES.CLEAR_CART:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
};
