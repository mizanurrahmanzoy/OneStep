"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const isLoggedIn = !!user;

  const handleUpdateProfile = async () => {
    if (!user) return;



    try {
      await updateProfile(user, {
        displayName: name,

      });
      await updateDoc(doc(db, "users", user.uid), {
        displayName: name,
        updatedAt: new Date(),
      });

      toast.success("Profile Updated Successfully");
    } catch (error: any) {
      toast.error("Failed to update profile.");
    }

  };


  if (!isLoggedIn) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-gray-200 text-center">
        <h1 className="text-3xl font-bold mb-8">
          Please log in to view your profile.
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200">
      {/* Profile Header */}
      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="space-y-5">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full h-14 border rounded-2xl px-5 outline-none"
        />

        <input
          type="email"
          defaultValue={user?.email || ""}
          disabled
          className="w-full h-14 border rounded-2xl px-5 bg-gray-100"
        />

        <button
          onClick={handleUpdateProfile}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition"
        >
          Update Profile
        </button>

      </div>

    </div>
  );
}