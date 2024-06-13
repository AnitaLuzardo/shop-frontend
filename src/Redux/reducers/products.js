import { 
  GET_PRODUCTS_LIST, 
  // PRODUCT_DETAIL_SUCCESSFULL, 
  // PRODUCT_DETAIL_ERROR 
} from "../types/products";

const initialState = {
  products:[],
};

export default (state= initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS_LIST:{
      return {
        ...state,
        products: action.productslist
      };
    }
      default:
        return state
    }
  }
   