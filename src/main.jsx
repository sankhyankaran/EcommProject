import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./screen/Roots.jsx";
import Contact from "./screen/Contact.jsx";
import Home from "./screen/Home.jsx";
import About from "./screen/About.jsx";
import Register from "./screen/Register.jsx";
import Login from "./screen/Login.jsx";
import Detail from "./components/Detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "detail",
            element: <Detail />,
          },
        ],
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
