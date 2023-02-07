import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Header from "./shared/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Gallery from "./pages/Gallery";

const NavigationContext = React.createContext();

const location = "/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationContext.Provider value={location}>
      <Header>
        <RouterProvider router={router} />
      </Header>
    </NavigationContext.Provider>
  </React.StrictMode>
);
