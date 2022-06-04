import express from 'express';
import usermodel from '../model/userschema.js';

export const usersignup=async(request,response)=>{
    try{
        const found= await usermodel.findOne({username:request.body.username});
        if(found){
            console.log('username exists');
            return response.status(401).json('username already exists!');
        }
        const user=request.body;
        const newuser=new usermodel(user);
        await newuser.save();
        console.log('user created');
        return response.status(200).json('user created!');

        
    }catch(error){
        console.log('error',error.message);
    }

    

}

export const userlogin=async(request,response)=>{

    try{
        const found= await usermodel.findOne({username:request.body.username,password:request.body.password});
        if(found) {
            console.log('login successful');
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }
    }
    catch(error){ response.json('Error: ', error.message); }
}