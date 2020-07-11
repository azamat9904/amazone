import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../Constans/cartConstans";

const initialState = {
    cartItems:[]
};
const cartReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CART_REMOVE_ITEM:
            return {...state,cartItems: state.cartItems.filter(x=>x.product !== action.payload)}
        case CART_ADD_ITEM :
            const item = action.payload;
            const product = state.cartItems.find(x =>x.product === item.product);
            if(product) return {...state,cartItems: state.cartItems.map(x => x.product === product.product ? product : x)};
            return {...state,cartItems: [...state.cartItems,item]};
        default: return state;
    }
};
export default cartReducer;