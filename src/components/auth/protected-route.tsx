import { useEffect } from "react";
import { toast } from "sonner";
import { useAuthStore } from "../../store/auth-store";
import { Navigate, useLocation, Outlet } from "react-router";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const location = useLocation();

  useEffect(() => {
    if (!accessToken) {
      toast.error("You must be Authenticated to access this page.");
    }
  }, [accessToken]);

  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children ?? <Outlet />}</>;
};

export default ProtectedRoute;
