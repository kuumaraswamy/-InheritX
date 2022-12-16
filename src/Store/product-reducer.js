import { createSlice } from "@reduxjs/toolkit";


const intitalPrductState = {products: []}
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