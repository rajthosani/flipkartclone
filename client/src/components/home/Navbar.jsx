import { Typography,Box,makeStyles, Divider,Menu,MenuItem } from "@material-ui/core";
import { navData} from '../constants/data';
import { useState } from "react";
const usestyles=makeStyles(theme=>({
    container:{
        display:'flex',
        marginTop:'60px',
        marginLeft:'7%',
        marginRight:'7%',
        justifyContent:'space-between',
        overflowX:'overlay',
        [theme.breakpoints.down('md')]:{
            marginLeft:'0px',
            marginRight:'0px'
        }

    },
    box:{
        
        textAlign:'center' ,
        padding:'10px 30px'

    },
    img:{
        width:52

    },
    menucontainer:{
        width:200,
        height:1000

    }
})
)
const Navbar=()=>{
    const classes=usestyles();

    return (
        <Box className={classes.container}>
            {
            
            navData?.map(data => (
                <Box className={classes.box}>
                    <img src={data?.url} className={classes.img}/>
                    <Typography>{data?.text}</Typography>
    

                </Box>
                )
                )}
                <Divider/>
            
        </Box>

    )
}


export default Navbar;