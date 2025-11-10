import { toast } from "sonner";
import { useAuthStore } from "../../store/auth-store";
import { Navigate, useLocation, Outlet } from "react-router";

const RoleBasedProtectedRoute = ({
  children,
  allowedRole,
}: {
  children?: React.ReactNode;
  allowedRole: string[];
}) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const userRole = useAuthStore((state) => state.userRole);
  const location = useLocation();

  // Wait until store is hydrated (userRole loaded)
  if (accessToken === undefined || userRole === undefined) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Checking authorization...
      </div>
    );
  }

  if (!accessToken) {
    toast.error("You must be Authenticated to access this page.");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!userRole || !allowedRole.includes(userRole)) {
    toast.error("You do not have permission to access this page.");
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children ?? <Outlet />}</>;
};

export default RoleBasedProtectedRoute;
