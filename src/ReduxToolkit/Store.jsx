import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ReduxToolkit/ProductSlice";
import blogReducer from "../ReduxToolkit/BlogSlice";
import sidebarnavReducer from "../ReduxToolkit/SidebarNavSlice";
const Store = configureStore({
  reducer: {
    product: productReducer,
    blog: blogReducer,
    sidebarnav: sidebarnavReducer,
  },
});

export default Store;
