import { ActionTypes } from "../constants/action-types"

export const setCartItems = (products) =>{
    return{
        type: ActionTypes.setCartItems,
        payload: products
    }
}