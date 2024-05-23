import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getProduct from './productAction';



export const fetchData = createAsyncThunk('productSlice/fetchData', async() => {
    return fetch('https://dummyjson.com/products').then(res => res.json())
})


const productSlice = createSlice({
    name: "productSlice",
    initialState: {singleSlice:[]},
    reducers: {
        clicked_product: (state, action) =>{
            return {
                singleSlice: action.payload
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state,action) => {
            state.singleSlice = action.payload
        })
    }

})

// export const  {clicked_product}= productSlice.actions;
export default productSlice.reducer;