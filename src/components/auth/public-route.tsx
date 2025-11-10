import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../../store/auth-store";

const PublicRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  // While store is hydrating, show loading
  if (accessToken === undefined) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-gray-600">
        Checking session...
      </div>
    );
  }

  // If user is already logged in, redirect to home
  if (accessToken) return <Navigate to="/" replace />;

  // Otherwise allow access to public route
  return <Outlet />;
};

export default PublicRoute;
