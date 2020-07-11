import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../Constans/productConstans";

const productListInitialState = {
    products:[],
    loading:false,
    error:false
};
const productListReducer = (state = productListInitialState,action)=>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading:true};
        case PRODUCT_LIST_SUCCESS :
            return {...state, loading:false,products:action.payload};
        case PRODUCT_LIST_FAIL:
            return {...state,loading:false,error:action.payload};
        default :return state;
    }
};

const productDetailsInitialState = {
    product:[]
};
const productDetailsReducer = (state = productDetailsInitialState,action)=>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {...state, loading:true};
        case PRODUCT_DETAILS_SUCCESS :
            return {...state, loading:false,product:action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {...state,loading:false,error:action.payload};
        default :return state;
    }
};


export {productListReducer,productDetailsReducer};