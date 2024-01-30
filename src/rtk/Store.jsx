import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice"

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store