import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: JSON.parse(localStorage.getItem("wishlist")) || [],

    reducers: {
        addToWishlist: (state, action) => {

            const { id } = action.payload
            const existingProduct = state.find(product => product.id === +id)

            if (existingProduct) {
                return state
            }

            const newState = [...state , action.payload]
            localStorage.setItem("wishlist", JSON.stringify(newState))
            return newState
        },
        removeFromWishlist: (state, action) => {

            const { id } = action.payload
            let newState = state.filter(product => {
                return product.id !== +id
            })
            localStorage.setItem("wishlist", JSON.stringify(newState))
            return newState
        }
    }
})

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer