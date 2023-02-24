import React, { useContext } from "react";
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
import ProfileTemplate from "./pages/About/profileTemplate";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Darkroom from "./pages/Darkroom";
import Gallery from "./pages/Gallery";
import CodeJournal from "./pages/CodeJournal";
// const ThemeContext = React.createContext();

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
    element: <ProfileTemplate />,
  },
  {
    path: "/darkroom",
    element: <Darkroom />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/code-journal",
    element: <CodeJournal />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header>
      <RouterProvider router={router} />
    </Header>
  </React.StrictMode>
);
