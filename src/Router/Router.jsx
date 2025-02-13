import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Dashboard from "../Pages/Dashboard";
import Product from "../Pages/Product";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/product", element: <Product /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
