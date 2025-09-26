import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import GetStarted from "../pages/get-started";
import SignUp from "../pages/sign-up";

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
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);


export const AppRouter = () => <RouterProvider router={router} />;
