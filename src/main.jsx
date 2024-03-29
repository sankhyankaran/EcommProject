import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Image.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./screen/Roots.jsx";
import Contact from "./screen/Contact.jsx";
import Home from "./screen/Home.jsx";
import About from "./screen/About.jsx";
import Register from "./screen/Register.jsx";
import Login from "./screen/Login.jsx";
import Detail from "./components/Detail.jsx";
import Support from "./screen/Support.jsx";
import AddtoCart from "./screen/AddtoCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "addtocart",
        element: <AddtoCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
