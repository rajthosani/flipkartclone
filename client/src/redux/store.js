import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer,getProductDetailsReducer,AddtoCartreducer } from './reducer/ProductsReducer';

const reducer=combineReducers({
    getProductsReducer,
    getProductDetailsReducer,
    AddtoCartreducer
})
const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;    