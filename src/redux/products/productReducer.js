import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAIL,
  PRODUCT_DETAIL_REQUEST,
} from "./productConstants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  products: [],
  status: statusList.idle,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, status: statusList.process, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        status: statusList.success,
        products: action.payload,
      };
    case PRODUCT_LIST_ERROR:
      return { ...state, status: statusList.error };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };

    case PRODUCT_DETAIL:
      return { product: action.product };

    default:
      return state;
  }
};
