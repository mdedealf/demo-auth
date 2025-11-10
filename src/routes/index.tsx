import { createBrowserRouter } from "react-router";
import Register from "../pages/register";
import MainLayout from "../layout/main-layout";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Product from "../pages/product";
import ProtectedRoute from "../auth/protected-route";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
