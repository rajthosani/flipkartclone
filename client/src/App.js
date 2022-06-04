import './App.css';
import './components/header/Header'
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import ContextProvider from './context/ContextProvider';
import Itemdetails from './components/product/Itemdetails';
import {Box} from '@material-ui/core';

function App() {
  return (
        <ContextProvider>
          <BrowserRouter>
              <Header/>
              <Box style={{marginTop:'70px'}}>
                <Routes>
                  <Route exact path="/product/:id" element={<Itemdetails/>}/>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/cart" element={<Cart/>}/>

                </Routes>
              </Box>
        
      
          </BrowserRouter>
         
        </ContextProvider>
    
  );
}

export default App;
