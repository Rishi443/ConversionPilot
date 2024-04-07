import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Overviewpage from "pages/Overviewpage";

export const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "overview-page",
      element: <Overviewpage />,
    },
  ]);

  return element;
};


