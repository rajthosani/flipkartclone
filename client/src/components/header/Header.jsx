import { AppBar, Toolbar,makeStyles,Typography,Box,IconButton,Drawer,List,ListItem} from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';

const usestyles=makeStyles(theme=>({
    header: {
    background:'#2874f0',
    height:60
    },
    logo: {
        height:27,
        marginTop:6
        
    },
    sublogo: {
        width:10,
        marginLeft:5,
        height:10
       
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    },
    box:{
        display:'flex'
    },
    list: {
        width: 200
    },

    container:{
       marginLeft:'12%' ,
       lineHeight:0,
       textDecoration:'none',
       color:"#fff"
    },
    subheading:{
        fontSize:10,
        fontStyle:'italic'

    },
    plus:{
        color:'yellow'
    }



}))

const Header=()=>{
    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes=usestyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => {
        return (
            <Box className={classes.list} onClick={handleClose}>
                <List >
                    <listItem button>
                        <HeaderButtons />
                    </listItem>
                    
                </List>
            </Box>
            )
    };


    return(   
        <AppBar className={classes.header}> 
            <Toolbar>
                <IconButton color='inherit' className={classes.menuButton} onClick={handleOpen}>
                    <Menu/>
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Link to='/' className={classes.container}>
                    <img src={logoURL} className={classes.logo}/> 
                    <Box className={classes.box}>
                        <Typography className={classes.subheading}>Explore <span className={classes.plus}>plus</span></Typography>
                        <img src={subURL} className={classes.sublogo}/>
                    </Box>
                </Link>
                <SearchBar/>
                <span className={classes.customButtons}><HeaderButtons/></span>
            </Toolbar>
        </AppBar>
    )
}

export default Header;