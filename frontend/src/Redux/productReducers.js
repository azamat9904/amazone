import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../Constans/productConstans";

const initialState = {
    products:[],
    loading:false,
    error:false
};
const productListReducer = (state = initialState,action)=>{
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

export {productListReducer};