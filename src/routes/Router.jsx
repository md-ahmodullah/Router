import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hello Router</h2>,
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
