import httpInstance from "../../helpers/httpInstance";
import { GET_PRODUCTS_LIST } from "../types/products";
import { PRODUCT_DETAIL_SUCCESSFULL, PRODUCT_DETAIL_ERROR } from "../types/products";
import axios from "axios";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS_LIST,
    productslist: products
  }
};

export const getProductslist = async (dispatch) => {
  try {
    const resProductList = await httpInstance.get('/products');
    // console.log('==>>>', resProductList)
    const productsData = resProductList.data;
    dispatch(getProducts(productsData));
  } catch (error) {
    console.log('===>>', error)
  }
}

//================DETAIL PRODUCT======================

export const getProductDetail = (product) => {
  return {
    type: PRODUCT_DETAIL_SUCCESSFULL,
    product
  }
};

export const getProductError = (error) => {
  return {
    type: PRODUCT_DETAIL_ERROR,
    errors: error
  }
};

export const getProductID = async (dispatch, id) => {
  try {
    const responseId = await axios.get(
      `http://localhost:3000/api/products/${id}`,
    );
    const productIdData = await responseId.data;
    dispatch(getProductDetail(productIdData))
  } catch (error) {
    dispatch(getProductError(error.message));
    console.log('Error', error)
  }
}