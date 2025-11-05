import { createBrowserRouter } from "react-router";
import Register from "../pages/register";
import MainLayout from "../layout/main-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <div className="h-screen w-screen justify-center items-center flex bg-black text-white">
            Hello World
          </div>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
