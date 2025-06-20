import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../redux/slic/CounterSlice";
import {destinationReducer} from '../redux/slic/DestinationSlice'
const Store =configureStore({

    reducer : {
        counterStore : counterReducer,
        destinationStore: destinationReducer
    }
});
console.log (Store.getState())
Store.dispatch({
    type : "counter/decrement"
})
console.log (Store.getState())
export default Store

 