import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import clsx from 'clsx';

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
            margin: '0px 80px'
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
    }
}));





const Productheader=({product})=>{
    const classes=useStyles();
    const {title}=product;
    const {price}=product;
    let a='';let b='';let c='';let d='';
    if(title){const {longTitle}=title;a=longTitle; }
    if(price){
        const {mrp}=price;b=mrp;
        const {cost}=price;c=cost;
        const {discount}=price;d=discount;
    }

    
    //const {mrp}=price;
    //console.log(title);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return(

        
        <Grid className={classes.rightContainer}>
            <Typography>{a}</Typography>
            <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                8 Ratings & 1 Reviews
                <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
            </Typography>
            <Typography>
                <span className={classes.price}>₹{c}</span>&nbsp;&nbsp;&nbsp; 
                <span className={classes.greyTextColor}><strike>₹{b}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{color: '#388E3C'}}>{d} off</span><br/><br/>
            </Typography>
        
        </Grid>
            
           
    )

       
        
    
}

export default Productheader;