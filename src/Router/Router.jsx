import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../Pages/Dashboard";
import Blog from "../Pages/Blog";
import AddProduct from "../Components/Layout/Product/AddProduct";
import ProductList from "../Pages/ProductList";
import EditProduct from "../Pages/EditProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/addproduct", element: <AddProduct /> },
      { path: "/blog", element: <Blog /> },
      { path: "/productlist", element: <ProductList /> },
      { path: "/editproduct", element: <EditProduct /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
