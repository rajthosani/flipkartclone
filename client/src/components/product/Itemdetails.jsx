//import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/ProductAction';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import  ActionItem  from './ActionItem';
import Productheader from './Productheader';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 58,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        margin:'0 80px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    },
    rightbox:{
        marginLeft:0
    }
}));

const Itemdetails=()=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const classes=useStyles();
    let {id}=useParams();
    const {product}=useSelector(state=>state.getProductDetailsReducer);


   // console.log('title is',title);
   // console.log(product);
    const dispatch=useDispatch();
    

    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch])
    // <Productheader product={product}/> is faulty
    return (
        <Box className={classes.component}>
            
            <Grid container className={classes.container}>
                <Grid item lg={5} md={6} sm={8} xs={12}>
                    
                    {product?<ActionItem product={product}/>:<></>}
                </Grid>
                <Grid item lg={7} md={6} sm={8} xs={12} className={classes.rightbox}>
                    {product?<Productheader product={product}/>:<></>}
                    {product?<ProductDetail product={product}/>:<></>}
                    
                    
                

                </Grid>
            </Grid> 
            

        </Box>
    )
}


export default Itemdetails;