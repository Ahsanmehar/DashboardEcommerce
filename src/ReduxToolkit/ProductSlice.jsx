import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  editproduct: false,
  editindex: null,
  editdata: null,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeproduct: (state, action) => {
      state.products = state.products.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    toggleeditproduct: (state, action) => {
      state.editproduct = !state.editproduct;
      state.editindex = action.payload.index;
      state.editdata = action.products[action.payload.index];
    },
    updateproduct: (state, action) => {
      state.products[state.index] = { ...action.payload };
      state.editproduct = false;
      state.editindex = null;
      state.editdata = null;
    },
  },
});

export const { addproduct, removeproduct, toggleeditproduct, updateproduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
