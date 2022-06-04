import express from 'express';
import { usersignup , userlogin} from '../usercontroller/usercontroller.js';
import { getproduct,getProductbyID } from '../usercontroller/productcontroller.js';

const router=express.Router();

router.post('/signup',usersignup);
router.post('/login',userlogin);
router.get('/products',getproduct);
router.get('/product/:id',getProductbyID);




export default router;

