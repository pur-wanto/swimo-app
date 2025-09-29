import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import GetStarted from "../pages/get-started";
import SignUp from "../pages/sign-up";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GetStarted />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
