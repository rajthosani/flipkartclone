import express from 'express';
import product from '../model/productschema.js';

export const getproduct=async(request,response)=>{
    try{
        const products=await product.find({});
        return response.json(products);
        
        
    }
    catch(error){
        console.log('error in getting products');

    }
}

export const getProductbyID=async(request,response)=>{

    try{
        const foundproduct=await product.findOne({'id':request.params.id});
        return response.json(foundproduct);
    }catch(error){
        console.log('cant find product',error.message);
    }
}