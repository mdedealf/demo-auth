import { createBrowserRouter } from "react-router";
import Register from "../pages/register";
import MainLayout from "../layout/main-layout";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "../components/auth/protected-route";
import Home from "../pages/home";
import PageNotFound from "../pages/404-page";
import RoleBasedProtectedRoute from "../components/auth/role-based-protected-route";
import Unauthorized from "../pages/unauthorized";
import Product from "../pages/product";
import PublicRoute from "../components/auth/public-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PublicRoute />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: "/product", element: <Product /> }],
      },
      {
        element: <RoleBasedProtectedRoute allowedRole={["ADMIN"]} />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      { path: "/unauthorized", element: <Unauthorized /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
