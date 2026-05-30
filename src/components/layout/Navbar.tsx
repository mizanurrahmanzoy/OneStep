"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
  FiLogOut,
  FiPackage,
} from "react-icons/fi";

import { useFilterStore } from "@/store/filterStore";
import { useCartStore } from "@/store/cartStore";
import { useAuth } from "@/context/AuthProvider";

import Container from "../shared/Container";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [userMenuOpen, setUserMenuOpen] =
    useState(false);

  const search = useFilterStore(
    (state) => state.search
  );

  const setSearch = useFilterStore(
    (state) => state.setSearch
  );

  const {
    cart,
    openCart,
  } = useCartStore();

  const {
    user,
    loading,
    logout,
  } = useAuth();

  if (loading) return null;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

        <Container>

          <div className="h-20 flex items-center justify-between gap-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileMenuOpen(true)
              }
              className="lg:hidden"
            >
              <FiMenu size={26} />
            </button>

            {/* Logo */}
            <Link href="/">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                OneStep
              </h1>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-3xl">

              <div className="w-full h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center border">

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="w-full h-full px-4 bg-transparent outline-none"
                />

                <button className="bg-blue-600 text-white h-full px-5">
                  <FiSearch size={20} />
                </button>

              </div>

            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">

              <button className="hover:text-blue-600">
                <FiHeart size={24} />
              </button>

              <button
                onClick={openCart}
                className="relative hover:text-blue-600"
              >
                <FiShoppingCart size={24} />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {user ? (

                <div className="relative">

                  <button
                    onClick={() =>
                      setUserMenuOpen(
                        !userMenuOpen
                      )
                    }
                  >
                    <img
                      src={
                        user.photoURL ||
                        "https://i.pravatar.cc/100"
                      }
                      alt="user"
                      className="w-10 h-10 rounded-full border"
                    />
                  </button>

                  {userMenuOpen && (

                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden">

                      <div className="p-4 border-b">

                        <h3 className="font-semibold">
                          {user.displayName ||
                            "User"}
                        </h3>

                        <p className="text-sm text-gray-500 truncate">
                          {user.email}
                        </p>

                      </div>

                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <FiUser />
                        Dashboard
                      </Link>

                      <Link
                        href="/dashboard/orders"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <FiPackage />
                        My Orders
                      </Link>

                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                      >
                        <FiLogOut />
                        Logout
                      </button>

                    </div>

                  )}

                </div>

              ) : (

                <div className="flex items-center gap-3">

                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-xl border"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white"
                  >
                    Register
                  </Link>

                </div>

              )}

            </div>

            {/* Mobile Cart */}
            <button
              onClick={openCart}
              className="relative lg:hidden"
            >
              <FiShoppingCart size={24} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">

            <div className="h-11 bg-gray-100 rounded-xl flex items-center border overflow-hidden">

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full h-full px-4 bg-transparent outline-none"
              />

              <button className="bg-blue-600 h-full px-4 text-white">
                <FiSearch />
              </button>

            </div>

          </div>

        </Container>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (

        <div className="fixed inset-0 z-[100] bg-black/40">

          <div className="w-72 h-full bg-white p-5">

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Menu
              </h2>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <FiX size={24} />
              </button>

            </div>

            {user ? (

              <>
                <div className="mt-6 flex items-center gap-3">

                  <img
                    src={
                      user.photoURL ||
                      "https://i.pravatar.cc/100"
                    }
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {user.displayName ||
                        "User"}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {user.email}
                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-4">

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
};

export default Navbar;