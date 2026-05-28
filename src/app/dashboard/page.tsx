"use client";

import { useAuth } from "@/context/AuthProvider";

export default function DashboardPage() {

  const { user } = useAuth();

  return (
    <div className="space-y-8">

      {/* Welcome */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-3">
          {user?.email}
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-6 border border-gray-200">

          <h3 className="text-gray-500">
            Total Orders
          </h3>

          <h2 className="text-4xl font-bold mt-3">
            12
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200">

          <h3 className="text-gray-500">
            Wishlist Items
          </h3>

          <h2 className="text-4xl font-bold mt-3">
            8
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200">

          <h3 className="text-gray-500">
            Pending Orders
          </h3>

          <h2 className="text-4xl font-bold mt-3">
            2
          </h2>

        </div>

      </div>

    </div>
  );
}