import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../constants/data';
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

const usestyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('sm')]:{
            marginTop:0,
            
        }
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180
        }
       
    }
}))


const Banner=()=>{
    const classes=usestyles();
    return(
        <Box className={classes.container}>
            <Carousel
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            interval='3300'
            >
           
                {
                    bannerData.map(banner=>(
                    <img className={classes.image} src={banner}/>
                        )
                        )
            
                }
            


            </Carousel>
        </Box>

    )


}

export default Banner;
