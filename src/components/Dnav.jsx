import Link from "next/link";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
// import { SessionData } from "@/Context";

const Dnavbar = () => {
//   var { user, setUser } = useContext(SessionData);


var user = false    

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (!confirmLogout) return;
      const res = await axios.post("/api/auth/logout");
      if (res.data.success) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="relative">
        <div className="flex items-center justify-between px-4 py-0">
          <div className="flex items-center gap-4">
            {/* <i
              onClick={() => alert("Roko Zara Sabar Karo!")}
              className="fa-solid fa-bars-staggered text-gray-500 text-lg"
            ></i> */}
            <div className="flex items-center">
              <Link href="/" className="flex-none">
                    <h1 className=" border-2 border-indigo-400 rounded-lg px-3 text-indigo-500" >Admin Panel</h1>
              </Link>

            
            </div>
          </div>
          {/* PROFILE START ============================*/}
          <>
            {user ? (
              <div className="flex py-2 group relative items-center gap-3 pr-4">
                <img
                  src={user.avatar || "/image/user.jpeg"}
                  alt="image here"
                  className="rounded-full h-9 w-9 object-cover cursor-pointer border border-gray-300"
                />
                <div className="leading-3">
                  <p className="text-[14px] capitalize font-medium mb-1">
                    {user.fullName}
                  </p>
                  <span className="text-[11px] cursor-pointer text-red-500 hover:text-red-600">
                    {user.isAdmin ? "Admin" : "User"}
                  </span>
                </div>

                {/* Profile Model Here ----------------- */}
                <div
                  className={`globalShadow pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 group-hover:top-[100%] transition-all duration-500 bg-[#ffffff84] hover:bg-white absolute -left-4 top-[130%] overflow-hidden rounded-md h-fit min-w-[100px] z-[1000000]`}
                >
                  <ul className="px-4 py-5">
                    <li className="flex flex-col gap-3">
                      <Link
                        className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        href="/portal/profile"
                      >
                        <i className="text-gray-600 bx bx-user"></i> Profile
                      </Link>
                      <Link
                        className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        href="/portal/profile/edit"
                      >
                        <i className="text-gray-600 bx bx-cog"></i> Setting
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                      >
                        <i className="text-gray-600 fa-solid bx bx-log-out-circle"></i>{" "}
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex py-2 group relative items-center gap-2 pr-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="image here"
                  className="rounded-full h-9 w-9 object-cover cursor-pointer border border-gray-300"
                />
                <div className="leading-3">
                  <p className="text-[14px] mb-1 capitalize font-medium">
                    Admin
                  </p>
                  <span className="text-[11px] cursor-pointer text-red-500 hover:text-red-600">
                    User
                  </span>
                </div>

                {/* Profile Model Here  */}
                <div
                  className={`shade pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 group-hover:top-[100%] transition-all duration-500 bg-white absolute left-0 top-[130%] overflow-hidden rounded-md h-fit min-w-[100px] z-[1000000]`}
                >
                  <ul className="px-4 py-4">
                    <li className="flex flex-col gap-2">
                      <Link
                        className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        href="/portal/profile"
                      >
                        <i className="fa-solid fa-user"></i> Profile
                      </Link>
                      <Link
                        className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        href="/"
                      >
                        <i className="fa-solid fa-gear"></i> Setting
                      </Link>
                      <button onClick={handleLogout} className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2">
                        <i className="fa-solid fa-gear"></i> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Dnavbar;