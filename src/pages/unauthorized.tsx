import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 px-6">
      <div className="text-center rounded-2xl p-10 max-w-md w-full animate-fadeIn">
        <h1 className="text-7xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-500 mb-8">
          You don’t have permission to access this page. Please login with an
          authorized account.
        </p>

        <Button onClick={() => navigate("/login")}>Login as an Admin</Button>
      </div>
    </div>
  );
};

export default Unauthorized;
