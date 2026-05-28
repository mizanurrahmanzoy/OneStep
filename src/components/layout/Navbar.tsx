"use client";

import Link from "next/link";

import {
  FiHeart,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import Container from "../shared/Container";

const Navbar = () => {
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

            <button className="relative hover:text-blue-600 transition">

              <FiShoppingCart size={26} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>

            </button>

            <button className="hover:text-blue-600 transition">
              <FiUser size={26} />
            </button>

          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;