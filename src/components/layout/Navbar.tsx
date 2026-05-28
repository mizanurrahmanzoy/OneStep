"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import {
  FiHeart,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { useAuth } from "@/context/AuthProvider";

import Container from "../shared/Container";

const Navbar = () => {
  const {
    user,
    loading,
    logout,
  } = useAuth();

  if (loading) {
    return null;
  }
  const {
    cart,
    openCart,
  } = useCartStore();
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">

      <Container>

        <div className="h-20 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <h1 className="text-4xl font-extrabold text-blue-600">
              OneStep
            </h1>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-3xl">

            <div className="w-full h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center border border-gray-200">

              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-full bg-transparent px-5 outline-none text-sm ml-5"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white h-full px-6 transition">
                <FiSearch size={20} />
              </button>

            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 shrink-0">

            <button className="hover:text-blue-600 transition">
              <FiHeart size={26} />
            </button>

            <button
              onClick={openCart}
              className="relative hover:text-blue-600 transition"
            >

              <FiShoppingCart size={26} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>

            </button>

            {
              user ? (

                <div className="flex items-center gap-4">

                  {/* User Image */}
                  <Link
                    href="/dashboard"
                    className="bg-grey-100 hover:border border-grey-300 text-grey px-4 py-2 rounded-xl text-sm transition"
                  >
                    <div className="flex items-center gap-3">

                      <img
                        src={
                          user.photoURL ||
                          "https://i.pravatar.cc/100"
                        }
                        alt="user"
                        className="w-10 h-10 rounded-full"
                      />

                      <div className="hidden md:block">

                        <p className="font-semibold text-sm">
                          {user.displayName || "User"}
                        </p>

                        <p className="text-xs text-gray-500">
                          {user.email}
                        </p>

                      </div>

                    </div>
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm transition"
                  >
                    Logout
                  </button>

                </div>

              ) : (

                <div className="flex items-center gap-3">

                  <Link
                    href="/login"
                    className="px-5 py-2 rounded-xl border hover:bg-gray-100 transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Register
                  </Link>

                </div>
              )
            }

          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;