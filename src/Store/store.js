
import { createStore } from "redux";
import cartReducer from "./reducers/index";

const initState = {
    cart:[]
};

const store = createStore(cartReducer , initState);




export default store;
