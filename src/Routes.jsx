import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Overviewpage from "pages/Overviewpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "overviewpage",
      element: <Overviewpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
