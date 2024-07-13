"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  const handleLogout = async () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  return (
    <button
      className="bg-red-500 px-4 py-1.5 text-sm rounded-full shadow text-white ml-2"
      onClick={handleLogout}
    >
      Sign out
    </button>
  );
};

export default Logout;
