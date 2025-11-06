import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <Navbar />
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
