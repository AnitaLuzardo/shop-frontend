import { GET_PRODUCTS_LIST } from "../types/products";
import axios from "axios";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS_LIST,
    productslist: products
  }
};

export const getProductslist = async (dispatch) => {
  try {
    const resProductList = await axios.get(
      'http://localhost:3000/api/products'
    );
    console.log('==>>>', resProductList)
    const productsData = resProductList.data;
    dispatch(getProducts(productsData));
  } catch (error) {
    console.log('===>>', error)
  }
}