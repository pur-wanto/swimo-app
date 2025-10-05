import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import GetStarted from "../pages/get-started";
import SignUp from "../pages/sign-up";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import Activity from "../pages/activity";
import Workout from "../pages/workout";
import Setting from "../pages/setting";

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
            element: <MainLayout />,
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "activity", element: <Activity /> },
              { path: "workout", element: <Workout /> },
              { path: "setting", element: <Setting /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
