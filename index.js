import express from 'express';
import Defaultdata from './Defaultdata.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';


const app=express();
const PORT=process.env.PORT||5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const URL="mongodb+srv://rajthosani:98339930@cluster0.zcqeh.mongodb.net/PROJECT0";
//const URL='mongodb+srv://rajthosani:98339930@cluster0.zcqeh.mongodb.net/PROJECT0?retryWrites=true&w=majority';
app.listen(PORT,()=>console.log('server is on port'));
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/client/build")));
  
    app.get("/",(req,res)=>{
      res.sendFile(path.join(__dirname,"client","build","index.html"));});
    
  }
  else {
      app.get("/",(req,res)=>{
        res.send("Api running");
      });
  }

app.use('/',router);


const connection=async()=>

{
    try{
    await mongoose.connect(process.env.URL,{ useNewUrlParser:true,useUnifiedTopology:true });

    console.log('mongodb connected successfully')}
    catch(error){console.log(error.message);}

}
connection();
//Defaultdata();


