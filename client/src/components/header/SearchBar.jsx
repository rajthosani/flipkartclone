import { makeStyles, fade, InputBase, List, ListItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getProducts as listproducts }  from "../../redux/actions/ProductAction";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
      position: 'absolute',
      color: '#000',
      background: '#FFFFFF',
      marginTop: 36
    },
    listimage:{
      height:'30px',
      width:'30px',
      marginRight:10
    }
}))


const SearchBar=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listproducts());
        },[dispatch])
    const {products} = useSelector(state=>state.getProductsReducer);
    //console.log(products);
    const [text,settext]=useState();
    const [ open, setOpen ] = useState(true);


    const gettext=(text)=>{
      settext(text);
      setOpen(false);
    }

    const classes = useStyle();
    return(
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>gettext(e.target.value)}
              
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products?.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <img src={product.url} className={classes.listimage}/>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
      
        </div>

    )

}
export default SearchBar;