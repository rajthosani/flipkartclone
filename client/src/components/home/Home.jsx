import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@material-ui/core";
import Slider from "./Slider";
import MidSection from "./MidSection";
//import { products } from "../constants/data";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getProducts as listproducts }  from "../../redux/actions/ProductAction";


const Home=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listproducts());
    },[dispatch])
    const {products} = useSelector(state=>state.getProductsReducer);
    

    
    return(
        <Box>
            <Navbar/>
            <Banner/>
            <Slider headtext="Deals for you" Products={products}/>
            <MidSection/>
            <Slider headtext="Recommended deals" Products={products}/>

            
        </Box>
            
           


        

    )


}

export default Home;