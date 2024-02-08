import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/ProductSlice";
import cartReducer from "./features/CartSlice"
import categoriesReducer from "./features/CategorySlice"
import wishlistReducer from "./features/WishlistSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        wishlist: wishlistReducer
    }
})

export default store