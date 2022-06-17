import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  productReducer,
  productDetailsReducer,
} from "./products/productReducer";
import { userLoginReducer } from "./auth/authReducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  products: productReducer,
  productDetail: productDetailsReducer,
  userLogin: userLoginReducer,
});

const store = createStore(reducer, composerEnhancer(applyMiddleware(thunk)));

export default store;
