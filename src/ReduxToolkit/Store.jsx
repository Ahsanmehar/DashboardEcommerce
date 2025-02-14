import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ReduxToolkit/ProductSlice";

const Store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default Store;
