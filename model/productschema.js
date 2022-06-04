import mongoose from 'mongoose';

const productschema=new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount: String,
    tagline:String


})

const product= mongoose.model('products',productschema);
export default product;