"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import FacebookIcon from "/public/assets/fb.png";
import GoogleIcon from "/public/assets/google.png";

const SocialLogins = () => {
  const hadleGoogleAuth = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/bookings" });
  };

  return (
    <>
      <div className="flex gap-3">
        <button className="w-full py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center hover:bg-slate-100 duration-200">
          <Image src={FacebookIcon} alt="facebook" width={32} height={32} />
          <span>Facebook</span>
        </button>

        <button
          onClick={hadleGoogleAuth}
          className=" w-full py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center hover:bg-slate-100 duration-200"
        >
          <Image src={GoogleIcon} alt="google" width={32} height={32} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
