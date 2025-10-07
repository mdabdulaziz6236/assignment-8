import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import AppErrorPage from "../Pages/AppErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/appDetails",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/appErrorPage",
        Component: AppErrorPage ,
      },
    ],
  }
//   {
//      path: "*",
//         element: <ErrorPage></ErrorPage>,
//   }
]);

export default router;
