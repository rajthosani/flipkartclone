import {Badge, Box,Button, Typography,makeStyles} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useState,useContext } from 'react';
import Login from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));

const HeaderButtons=()=>{

    const {cartitems} = useSelector(state => state.AddtoCartreducer);
    const[open,setopen]=useState(false);
    const classes=useStyle();
    const {account ,setaccount}=useContext(LoginContext);
    const opendialog=()=>{
        setopen(true);
    }
    return(
        
        <Box className={classes.wrapper}>
            
            {account?
                <Profile account={account} setAccount={setaccount}/>:
                <Button variant="contained" className={classes.login} onClick={()=>opendialog()}>Login</Button>}

            <Typography className={classes.container}>More</Typography>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartitems.length} color="secondary">
                    <ShoppingCart/>
                </Badge>   
                <Typography>cart</Typography>


            </Link>
            <Login openstate={open} setopen={setopen} setaccount={setaccount}/>

        </Box>


    )
}

export default HeaderButtons;