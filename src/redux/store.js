import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import homeSlice from "./slices/HomeSlice";

const store = configureStore({
    reducer:{
        cartState:cartSlice.reducer,
        homeState:homeSlice.reducer
    }
})

export default store