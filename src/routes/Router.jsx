import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/about",
    element: <h2>About</h2>,
  },
  {
    path: "/contact",
    element: <h2>Contact</h2>,
  },
]);

export default router;
