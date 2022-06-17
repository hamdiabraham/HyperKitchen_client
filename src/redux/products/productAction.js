import axios from "axios";
import { getProductDetail } from "../../services.js/product";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAIL,
} from "./productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const response = await axios.get("http://localhost:7000/api/v1/products");
    const data = response.data.product;

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  const { data } = await getProductDetail(id);

  dispatch({
    type: PRODUCT_DETAIL,
    product: data.product,
  });
};
