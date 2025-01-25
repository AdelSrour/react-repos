import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Notfound from "./components/Notfound/Notfound";
import Reset from "./components/reset/Rest";
import Category from "./components/Category/Category";
import Brands from "./components/Brands/Brands";

export default function MainRouter() {
  let router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "product", element: <Product /> },
          { path: "cart", element: <Cart /> },
          { path: "brands", element: <Brands /> },
          { path: "category", element: <Category /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
          { path: "reset", element: <Reset /> },
          { path: "*/*", element: <Notfound /> },
        ],
      },
    ],
    {
      basename: "/etc/react-cart",
    }
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
