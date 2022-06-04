import express from 'express';
import Defaultdata from './Defaultdata.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';


const app=express();
const PORT=5000;
const URL="mongodb+srv://rajthosani:98339930@cluster0.zcqeh.mongodb.net/PROJECT0";
//const URL='mongodb+srv://rajthosani:98339930@cluster0.zcqeh.mongodb.net/PROJECT0?retryWrites=true&w=majority';
app.listen(PORT,()=>console.log('server is on port'));
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);


const connection=async()=>

{
    try{
    await mongoose.connect(URL,{ useNewUrlParser:true,useUnifiedTopology:true });

    console.log('mongodb connected successfully')}
    catch(error){console.log(error.message);}

}
connection();
//Defaultdata();


