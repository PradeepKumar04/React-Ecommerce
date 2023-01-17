import { ActionTypes } from "../constants/action-types"

const initialState={
    products:[]
}
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.setCartItems:
            console.log(action.payload);
            return {...state, products:action.payload};
        default :
            return {...state}

    }
}
