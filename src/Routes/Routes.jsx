import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [

      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,

      },
      {
        path: '/contact',
        element: <Contact />
      },


    ]
  },
]);