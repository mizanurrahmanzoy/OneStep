"use client";

import Link from "next/link";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "@/lib/firebase";

import toast from "react-hot-toast";

import Container from "@/components/shared/Container";

export default function LoginPage() {

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success(
        "Login Successful"
      );

    } catch (error: any) {

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      );

      toast.success(
        "Google Login Successful"
      );

    } catch (error: any) {

      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] flex items-center justify-center py-10">

      <Container>

        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-200">

          <h1 className="text-4xl font-bold text-center mb-3">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to your account
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-14 border rounded-2xl px-5 outline-none"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 border rounded-2xl px-5 outline-none"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl font-semibold transition"
            >

              {loading
                ? "Logging in..."
                : "Login"}

            </button>

          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-400">
            OR
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border h-14 rounded-2xl font-semibold hover:bg-gray-50 transition"
          >
            Continue With Google
          </button>

          {/* Register */}
          <p className="text-center mt-6 text-gray-600">

            Don&apos;t have an account?

            <Link
              href="/register"
              className="text-blue-600 ml-2 font-medium"
            >
              Register
            </Link>

          </p>

        </div>

      </Container>

    </main>
  );
}