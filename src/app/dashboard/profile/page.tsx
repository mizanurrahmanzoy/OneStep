"use client";

import { useAuth } from "@/context/AuthProvider";

export default function ProfilePage() {

  const { user } = useAuth();

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200">

      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="space-y-5">

        <input
          type="text"
          defaultValue={user?.displayName || ""}
          placeholder="Your Name"
          className="w-full h-14 border rounded-2xl px-5 outline-none"
        />

        <input
          type="email"
          defaultValue={user?.email || ""}
          disabled
          className="w-full h-14 border rounded-2xl px-5 bg-gray-100"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
          Update Profile
        </button>

      </div>

    </div>
  );
}