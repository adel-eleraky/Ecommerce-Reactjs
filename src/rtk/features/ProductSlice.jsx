import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingProducts = createAsyncThunk(
    "products/fetchingProducts",
    async () => {

        const options = {
            method: "get",
            url: "https://dummyjson.com/products?limit=0"
        }
        const result = await axios(options)
        return result.data
    }
)

const ProductsSlice = createSlice({

    name: "products",
    initialState: {
        loading: true,
        error: null,
        data: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchingProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchingProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchingProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    }
})

export const { } = ProductsSlice.actions
export default ProductsSlice.reducer