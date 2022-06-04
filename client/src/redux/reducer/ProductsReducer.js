import * as actiontype from '../constants/productconstants';


export const getProductsReducer=(state={ products:[] }, action)=>{
    switch(action.type){
        case actiontype.GET_PRODUCT_SUCCESS:
            return {products:action.payload}

        case actiontype.Get_PRODUCT_FAIL:
            return {error:action.payload}
        
        default:
            return state    

    }
};

export const getProductDetailsReducer=(state={ product:[] } ,action)=>{
    switch(action.type){
        case actiontype.GET_PRODUCT_DETAILS_SUCCESS:
            return {product:action.payload}

        case actiontype.Get_PRODUCT_DETAILS_FAIL:
            return {error:action.payload}
        
        default:
            return state  
    }

};

export const AddtoCartreducer=(state={ cartitems:[] },action)=>{
    switch(action.type){
        case actiontype.ADD_TO_CART:
            const item=action.payload;
            const existItem = state.cartitems.find(product => product.id === item.id);
            if (existItem){return;}
            else{
                return {...state,cartitems:[...state.cartitems,item]}
            }

        case actiontype.REMOVE_FROM_CART:
            return{ ...state, cartitems:state.cartitems.filter(product=>product.id !== action.payload)}
        
        default:
            return state;

    }

}