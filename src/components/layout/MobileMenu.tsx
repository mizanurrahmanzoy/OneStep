"use client";

import { useState } from "react";

import Link from "next/link";

import { FiMenu, FiX } from "react-icons/fi";

import { useAuth } from "@/context/AuthProvider";

export default function MobileMenu() {

  const [open, setOpen] =
    useState(false);

  const {
    user,
    logout,
  } = useAuth();

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
      >
        <FiMenu size={28} />
      </button>

      {open && (

        <div className="fixed inset-0 z-50 bg-black/40">

          <div className="w-72 h-full bg-white p-6">

            <button
              onClick={() =>
                setOpen(false)
              }
            >
              <FiX size={28} />
            </button>

            {user ? (

              <>
                <div className="mt-6">

                  <img
                    src={
                      user.photoURL ||
                      "https://i.pravatar.cc/100"
                    }
                    className="w-16 h-16 rounded-full"
                    alt=""
                  />

                  <h3 className="mt-3 font-bold">
                    {user.displayName ||
                      "User"}
                  </h3>

                </div>

                <div className="mt-8 space-y-3">

                  <Link
                    href="/dashboard"
                    className="block"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/dashboard/orders"
                    className="block"
                  >
                    Orders
                  </Link>

                  <Link
                    href="/dashboard/wishlist"
                    className="block"
                  >
                    Wishlist
                  </Link>

                  <button
                    onClick={logout}
                    className="text-red-600"
                  >
                    Logout
                  </button>

                </div>
              </>
            ) : (

              <div className="mt-8 space-y-4">

                <Link
                  href="/login"
                  className="block"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="block"
                >
                  Register
                </Link>

              </div>
            )}

          </div>

        </div>

      )}
    </>
  );
}