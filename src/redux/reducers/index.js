import {combineReducers} from 'redux';
import { cartReducer} from './cartReducer';

const reducers = combineReducers({
    cartProducts: cartReducer
})

export default reducers;