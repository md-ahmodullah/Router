import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorPage: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coffee",
        element: <Coffee />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
