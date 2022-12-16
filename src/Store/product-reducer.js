import { createSlice } from "@reduxjs/toolkit";

const intialData = JSON.parse(localStorage.getItem('products'))
const intitalPrductState = {products: intialData}
const productSlice = createSlice({
    name: 'product',
    initialState: intitalPrductState,
    reducers: {
        allProducts(state, action) {
            state.products = action.payload;
        },
        addingNewProduct(state, action) {
            state.products = [...state.products, action.payload]
        }
    }

})

export const productAction = productSlice.actions;
export default productSlice.reducer 