import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dnav from "./Dnav";
import Link from "next/link";
import Aside from "./Aside";
import { useRouter } from "next/router";
const Format = ({ children }) => {
  const { pathname, back } = useRouter();
  var privateRoutes = pathname.startsWith("/portal");
  var isPortal = pathname == "/portal";
  return (
    <>
      <div>
        {privateRoutes ? (
          <div className="max-h-screen flex flex-col h-screen bg-[#ffffff] overflow-hidden">
            <div className="w-full">
              <Dnav />
            </div>
            <div className="flex flex-1">
              <Aside />

              <div className="overflow-y-auto max-h-[90vh] max-w-[100vw] overflow-x-auto flex-1 bg-[#eee] rounded-2xl shadow-[inset_0px_0px_10px_rgba(56,56,56,0.2)] p-4">
                {/* // portal breadcrumb code */}
                <div className="my-1 mb-4 py-4 px-8 flex items-center gap-3 text-sm bg-[#ffffffa2] rounded-full fixed top-16 left-1/2 -translate-x-1/2">
                  {isPortal ? (
                    <Link
                      href={"/"}
                      className=" text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                    >
                      <i className="bx bx-exit"></i>
                      <span> Exit Portal {"  > "}</span>
                    </Link>
                  ) : (
                    <Link
                      href={"/portal"}
                      className=" text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                    >
                      <i className="bx bx-home-alt text-indigo-500"></i>
                      <span> Home {" > "} </span>
                    </Link>
                  )}

                  <span
                    className=" text-gray-500 hover:text-indigo-500 cursor-pointer"
                    onClick={() => back()}
                  >
                    {" "}
                    Go Back{" "}
                  </span>
                </div>

                <div className=" mt-[60px]">{children}</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* <Navbar /> */}
            {children}
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Format;
