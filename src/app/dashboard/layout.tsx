"use client";

import Link from "next/link";

import {
  FiHeart,
  FiHome,
  FiMapPin,
  FiPackage,
  FiSettings,
  FiUser,
} from "react-icons/fi";

import { useAuth } from "@/context/AuthProvider";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {
    user,
    loading,
  } = useAuth();

  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
    }

  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">

        {/* Sidebar */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 h-fit">

          {/* User */}
          <div className="text-center border-b pb-6">

            <img
              src={
                user.photoURL ||
                "https://i.pravatar.cc/150"
              }
              alt="user"
              className="w-24 h-24 rounded-full mx-auto"
            />

            <h2 className="mt-4 text-xl font-bold">
              {user.displayName || "User"}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              {user.email}
            </p>

          </div>

          {/* Menu */}
          <div className="mt-6 space-y-2">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiHome />
              Dashboard
            </Link>

            <Link
              href="/dashboard/orders"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiPackage />
              My Orders
            </Link>

            <Link
              href="/dashboard/wishlist"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiHeart />
              Wishlist
            </Link>

            <Link
              href="/dashboard/address"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiMapPin />
              Saved Address
            </Link>

            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiUser />
              Profile
            </Link>

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <FiSettings />
              Settings
            </Link>

          </div>

        </div>

        {/* Content */}
        <div className="lg:col-span-3">

          {children}

        </div>

      </div>

    </div>
  );
}