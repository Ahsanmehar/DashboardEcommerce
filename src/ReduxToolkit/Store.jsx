import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ReduxToolkit/ProductSlice";
import blogReducer from "../ReduxToolkit/BlogSlice";

const Store = configureStore({
  reducer: {
    product: productReducer,
    blog: blogReducer,
  },
});

export default Store;
