import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addtocart,removefromcart} from '../../redux/actions/ProductAction';
import Emptycart from './Emptycart';
import Totalview from './Totalview';

//import TotalView from './TotalView';
//import EmptyCart from './EmptyCart';
//import { post } from '../../utils/paytm';
//import { payUsingPaytm } from '../../service/api';

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        //display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}));


const Cart = ({ match,history }) => {
    const classes = useStyle();

    const {cartitems} = useSelector(state => state.AddtoCartreducer);
    console.log('cart items',cartitems);
    const dispatch=useDispatch();

    const removeItem=(id)=>{
        dispatch(removefromcart(id));
    }


    return(
        <>
            
            {
                cartitems.length?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                            <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartitems?.length})</Typography>

                            </Box>
                            {
                                cartitems.map(item=>(
                                    <CartItem item={item} removeItem={removeItem}/>
                                ))
                            }
                        </Box>
                            <Totalview cartItems={cartitems}/>
                        <Box className={classes.bottom}>
                            <Button variant="contained" className={classes.placeOrder}>Place Order</Button>
                        </Box>
                    </Box>:<Emptycart/>

            }
                                
        </>
        
    )
}


export default Cart;