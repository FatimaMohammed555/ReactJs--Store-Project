
import { ADD_TO_CART } from "./types";
import { REMOVE_FROM_CART } from "./types";
import {CLEAR_CART} from './types';

//this function to create action
export function addToCart(productsInfo, quantity){
    return {
        type: ADD_TO_CART,
        productsInfo, 
        quantity
    }
}

export function removeFromCart(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}


export function clearCart(){
    return {
        type: CLEAR_CART
    }
}




