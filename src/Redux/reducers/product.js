import { 
  PRODUCT_DETAIL_SUCCESSFULL,
  PRODUCT_DETAIL_ERROR 
} from "../types/products";

const initialState = {
  product: null,
  errors: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PRODUCT_DETAIL_SUCCESSFULL: {
      return {
        ...state,
        product: action.product,
        errors: null
      };
    }
    case PRODUCT_DETAIL_ERROR: {
      return {
        ...state,
        errors: action.errors
      };
    }
      default:
        return state
    }
  }

