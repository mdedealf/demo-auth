import React from "react";
import { BarChart3, ShoppingBag, Users, Wallet } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-[60px]">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">
          Overview of your application’s performance
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Sales"
          value="$12,450"
          icon={<ShoppingBag className="text-blue-500" size={28} />}
        />
        <DashboardCard
          title="Active Users"
          value="1,204"
          icon={<Users className="text-green-500" size={28} />}
        />
        <DashboardCard
          title="Revenue"
          value="$28,350"
          icon={<Wallet className="text-yellow-500" size={28} />}
        />
        <DashboardCard
          title="New Orders"
          value="56"
          icon={<BarChart3 className="text-purple-500" size={28} />}
        />
      </div>

      {/* Content grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Left section (e.g., Chart or Analytics) */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Sales Overview
          </h2>
          <div className="flex h-60 items-center justify-center text-gray-400">
            [Insert Chart Component Here]
          </div>
        </div>

        {/* Right section (Recent Activity / Notifications) */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Recent Activity
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>🛒 Order #1024 completed successfully</li>
            <li>👤 New user registered: johndoe@example.com</li>
            <li>💳 Payment of $230 processed</li>
            <li>📦 Product “Headphones” restocked</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* Reusable DashboardCard component */
interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-1 text-xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="rounded-full bg-gray-100 p-3">{icon}</div>
    </div>
  );
};
