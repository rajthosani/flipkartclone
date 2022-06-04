import { products } from './constants/products.js';
import product from './model/productschema.js';

const Defaultdata=async()=>{
    try{
        await product.deleteMany({});
        await product.insertMany(products);
        console.log('data inserted successfuly');

    }
    catch(error){
        console.log('error while inserting data'+ error.message);
    }

}

export default Defaultdata;