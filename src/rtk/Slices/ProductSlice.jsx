import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingProducts = createAsyncThunk(
    "products/fetchingProducts",
    async () => {

        const options = {
            method: "get",
            url: "https://fakestoreapi.com/products"
        }
        const result = await axios(options)
        return result.data
    }
)

const ProductsSlice = createSlice({
    
    name:"products",
    initialState: [],

    extraReducers: (builder) => {
        builder.addCase(fetchingProducts.fulfilled , (state , action) => {
            return action.payload
        })
    }
})

export const  { } = ProductsSlice.actions
export default ProductsSlice.reducer