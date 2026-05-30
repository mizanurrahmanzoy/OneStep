"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";

import { useAuth } from "@/context/AuthProvider";

export default function UserDropdown() {

  const {
    user,
    logout,
  } = useAuth();

  if (!user) return null;

  return (
    <Menu as="div" className="relative">

      <Menu.Button>

        <img
          src={
            user.photoURL ||
            "https://i.pravatar.cc/100"
          }
          alt=""
          className="w-10 h-10 rounded-full cursor-pointer"
        />

      </Menu.Button>

      <Menu.Items
        className="
          absolute
          right-0
          mt-3
          w-56
          bg-white
          rounded-2xl
          shadow-lg
          border
          p-2
        "
      >

        <div className="px-4 py-3 border-b">

          <p className="font-semibold">
            {user.displayName || "User"}
          </p>

          <p className="text-sm text-gray-500">
            {user.email}
          </p>

        </div>

        <Link
          href="/dashboard"
          className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/orders"
          className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
        >
          Orders
        </Link>

        <Link
          href="/dashboard/profile"
          className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
        >
          Profile
        </Link>

        <button
          onClick={logout}
          className="
            w-full
            text-left
            px-4
            py-3
            text-red-600
            hover:bg-red-50
            rounded-xl
          "
        >
          Logout
        </button>

      </Menu.Items>

    </Menu>
  );
}