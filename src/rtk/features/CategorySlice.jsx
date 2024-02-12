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
    initialState: [],

    extraReducers: (builder) => {
        builder.addCase(fetchingCategories.fulfilled , (state , action) => {
            return action.payload
        })
    }
})

export  const { } = categoriesSlice.actions
export default categoriesSlice.reducer