import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-reducer";

const store = configureStore({
  reducer: {
    product: productReducer
  }
})


export default store;