// import { combineReducers, createStore } from "redux";
// import productReducer from "../../Store/Reducer/productReducer";
import {configureStore} from '@reduxjs/toolkit';
import productSlice from "../productSlice";

// const combainReducer = combineReducers({
//     productReducer
//   })
  
//   const store = createStore(combainReducer)

const store = configureStore({
    reducer: {
       pro: productSlice
    }
})

  export default store;