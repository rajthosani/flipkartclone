import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import { products } from "../constants/data";
import { makeStyles,Box, Typography,Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const usestyles=makeStyles(theme=>({

    img:{
        width:70,
        height:120,
        marginTop:10,
        
        padding:'0px,17px'
        
    },
    sliderheader:{
        fontSize:25,
        fontStyle:'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize:20,
            marginTop:0
        }
    },
    
    container:{
        backgroundColor:"#ffffff",
        marginTop:5,
        marginLeft:15,
        [theme.breakpoints.down('sm')]:{
            marginTop:'auto'
        }
    },
    shorttitle:{
        fontWeight:10,
        textDecoration:'none',
        fontSize:15
    },
    discount:{
        color:'gold',
        textDecoration:'none',
        fontSize:15
    }


}))

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Slider=({headtext,Products})=>{
    const classes=usestyles();
    
    return(
        <Box className={classes.container}>
            <Typography className={classes.sliderheader}>{headtext}</Typography>
            <Divider/>
            <Carousel swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        centerMode={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        showDots={false}>
                {
                   Products.map(product=>(
                        <Link to={`product/${product.id}`}>
                            <Box textAlign="center">
                                <img src={product.url} className={classes.img}/>
                                <Typography className={classes.shorttitle}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.discount}>{product.discount}</Typography>
                                <Typography className={classes.shorttitle}>{product.tagline}</Typography>
                                            
                            </Box>
                        </Link>




                    ))
                }
                
            </Carousel>
            
            

        </Box> 
        
    )

}


export default Slider;