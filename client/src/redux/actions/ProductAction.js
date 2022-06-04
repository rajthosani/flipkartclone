import axios from 'axios';
import * as action from '../constants/productconstants';
const url= 'http://localhost:5000';

export const getProducts=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/products`);
        dispatch({type:action.GET_PRODUCT_SUCCESS,payload:data});


    }catch(error){
        dispatch({type:action.Get_PRODUCT_FAIL,payload:error.response});
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/product/${id}`);
        dispatch({type:action.GET_PRODUCT_DETAILS_SUCCESS,payload:data});

    }catch(error){
        dispatch({type:action.Get_PRODUCT_DETAILS_FAIL,payload:error.response});
    }

}

export const addtocart=(id)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/product/${id}`);
        dispatch({type:action.ADD_TO_CART,payload:data});
    }catch(error){
        console.log('error while inserting to cart',error.message);
    }


}

export const removefromcart=(id)=>async(dispatch)=>{
    
    dispatch({type:action.REMOVE_FROM_CART,payload:id});


}

