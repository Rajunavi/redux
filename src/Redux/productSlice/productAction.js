import { createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../Hooks/useFetch";

const getProduct = createAsyncThunk('productSlice/getProduct', async()=>{
return useFetch('https://dummyjson.com/products')
})

export default getProduct;