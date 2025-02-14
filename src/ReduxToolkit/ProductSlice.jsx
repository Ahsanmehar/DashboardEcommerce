import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products"))
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addproduct } = ProductSlice.actions;
export default ProductSlice.reducer;
