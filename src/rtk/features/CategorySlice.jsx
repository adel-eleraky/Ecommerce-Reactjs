import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchingCategories = createAsyncThunk(
    "categories/fetchingCategories",
    async () => {

        const options = {
            method: "get",
            url: "https://dummyjson.com/products/categories"
        }
        const result = await axios(options)
        return result.data
    }
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        loading: true,
        error: null,
        data: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchingCategories.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchingCategories.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
            .addCase(fetchingCategories.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
    }
})

export const { } = categoriesSlice.actions
export default categoriesSlice.reducer