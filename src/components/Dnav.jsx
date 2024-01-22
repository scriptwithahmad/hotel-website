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

//   const handleLogout = async () => {
//     try {
//       const confirmLogout = window.confirm("Are you sure you want to logout?");
//       if (!confirmLogout) return;
//       const res = await axios.post("/api/auth/logout");
//       if (res.data.success) {
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

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
              {/* <Link href="/" className="flex-none">
                <img
                  src="/logo.png"
                  width={20}
                  className="mx-auto w-[120px] mt-2"
                />
              </Link> */}

              <h2 className=" text-[30px] text-orange-600">BUFFET</h2>
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
                  src="/user.jpeg"
                  alt="image here"
                  className="rounded-full h-9 w-9 object-cover cursor-pointer border border-gray-300"
                />
                <div className="leading-3">
                  <p className="text-[14px] capitalize font-medium">
                    Not Found
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
                      <button className="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-2">
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