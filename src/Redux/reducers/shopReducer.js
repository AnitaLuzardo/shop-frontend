import { 
  // ADD_TO_CART_REQUESTED,
  // ADD_TO_CART_SUCCESSFULL,
  // ADD_TO_CART_ERRORED, 
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART
  // CLEAR_CART, 
  // REMOVE_ALL_FROM_CART, 
  // REMOVE_ONE_FROM_CART 
} from "../types/shop";


export const shopInitialState = {
  products:[],
  cart:[]
};

export default (state = shopInitialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let newItem = state.products.find((product)=> product.id === action.payloadId);
      console.log('New Item =', newItem);

      let itemInCart = state.cart.find((item)=> item.id === newItem.id);

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item)=>item.id===newItem.id 
          ? {...item, quatity:item.quatity + 1} 
          :item
          ),
        }
        :{
          ...state,
          cart: [...state.cart, {newItem, quatity: 1}]
        }
    default:
      return state;
  }
};






// case ADD_TO_CART_SUCCESSFULL: {
    //   const newCart = [...state.cart, action.productAdd];
    //   return {
    //     ...state,
    //     cart: newCart,
    //     loading: false,
    //   };
    // }

    // case ADD_TO_CART_ERRORED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.errors,
    //   };