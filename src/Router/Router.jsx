import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../Pages/Dashboard";
import AddProduct from "../Components/Layout/Product/AddProduct";
import ProductList from "../Pages/ProductList";
import AddBlog from "../Pages/AddBlog";
import BlogList from "../Pages/BlogList";
import Analytics from "../Pages/Analytics";
import Reports from "../Pages/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/addproduct", element: <AddProduct /> },
      { path: "/productlist", element: <ProductList /> },
      { path: "/addblog", element: <AddBlog /> },
      { path: "/bloglist", element: <BlogList /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/reports", element: <Reports /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
