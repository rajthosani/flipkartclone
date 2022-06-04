import axios from 'axios';


const url='http://localhost:5000';

export const authenticateSignUp=async(user)=>{
    try{
    return await axios.post(`${url}/signup`,user);}
    catch(error){
        console.log('error in signup api');
    }
}

export const authenticatelogin=async(user)=>{

    try{console.log('inside api');
        return await axios.post(`${url}/login`,user);
        
    }
    catch(error){
        console.log('error while logging in');
    }
}
