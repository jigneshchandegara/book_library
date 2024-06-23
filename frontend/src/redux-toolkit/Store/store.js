import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Slice/bookslice"

export const store = configureStore({
    reducer: {
        book: bookReducer,
        
    }
})