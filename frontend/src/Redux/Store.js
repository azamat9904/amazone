import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {productDetailsReducer, productListReducer} from "./productReducers";
import thunk from 'redux-thunk';
import cartReducer from "./cartReducers";

const initialState = {};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
});
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));
export default store;