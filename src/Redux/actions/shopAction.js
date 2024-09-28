// import axios from 'axios';
import httpInstance from '../../helpers/httpInstance'
import { 
  ADD_TO_CART,  
  CLEAR_CART, 
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART
} from '../types/shop';


export const addToCart = (id) => async (dispatch) => {
  try {
    // Realiza la llamada al endpoint para agregar un producto al carrito
    const response = await httpInstance.post('/shoppings/carts', { productId: id });

    // Si la llamada es exitosa, despacha la acción con el ID del producto
    dispatch({
      type: ADD_TO_CART,
      payloadId: id
    });

    console.log(response.data);
  } catch (error) {
    // Maneja cualquier error que ocurra durante la llamada al servidor
    console.error('Error adding product to cart:', error);
  }
};

export const delFrontCart = (id, all=false) => 
  all ? {type: REMOVE_ALL_FROM_CART, payload:id} : {type:REMOVE_ONE_FROM_CART, payload:id};

export const cleanCart = () => ({type: CLEAR_CART});

  //     const response = await httpInstance.post(
  //       '/shoppings/carts',

// const errored = (error) => {
//   const errorInfo = {
//     message: error.message,
//     code: error.code,
//     response: error.response ? {
//       status: error.response.status,
//       data: error.response.data,
//       headers: error.response.headers ? { ...error.response.headers } : null,
//     } : null,
//   };

//   return {
//     type: ADD_TO_CART_ERRORED,
//     errors: errorInfo,
//   };
// }

  // return async (dispatch) => {
  //   try {
  //     const response = await httpInstance.post(
  //       '/shoppings/carts',
  //     );
   
  // }

  // return async (dispatch) => {
  //   try {
  //     const response = await httpInstance.post(
  //       '/shoppings/carts',
  //     );

  //     const data = response.data;
  //     console.log('Response from server:', data);

  //     dispatch({
  //       type: ADD_TO_CART,
  //       productShop: product
  //     })

  //   } catch (error) {
  //     console.error('Error adding to cart:', error)
  //   }
  // }
  // }