import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../../context/ContextProvider';
// import { initialState, reducer } from '../../reducers/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../../redux/actions/ProductAction';

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 50px',
        border: '1px solid #f0f0f0',
        width: '55%',
        height:'50%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50,
        marginTop:20
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}));

const ActionItem = ({ product }) => {
    const classes = useStyle();
    const navigate = useNavigate();
    const { account } = useContext(LoginContext);
    //const { id, price, detailUrl, title } = product;
    const dispatch=useDispatch();

    const additemstocart=()=>{
        dispatch(addtocart(product?.id));
        navigate('/cart');
    }
        
//  const [quantity, setQuantity] = useState(1);

    return (
        <Box className={classes.leftContainer}>
            <img src={product?.detailUrl} className={classes.productImage} /><br/>
            <Button onClick={additemstocart} className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
            <Button className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default ActionItem;