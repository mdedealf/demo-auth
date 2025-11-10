import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom"; // ✅ fixed
import { toast } from "sonner";
import { useAuthStore } from "../store/auth-store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const location = useLocation();

  useEffect(() => {
    if (!accessToken) {
      toast.error("You must be logged in to access this page.");
    }
  }, [accessToken]);

  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
