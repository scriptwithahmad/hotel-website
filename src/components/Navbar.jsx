import React, { useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter()
  const navLinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "PRICES",
      link: "/price",
    },
    {
      label: "MENU",
      link: "/menu",
    },
    {
      label: "GALLERY",
      link: "/gallery",
    },
  ];

  useEffect(() => {
    const menuIcon = document.querySelector("#menuIcon");
    const layer = document.querySelector("#layer");
    const crossBtn = document.querySelector("#cross");

    menuIcon.addEventListener("click", () => {
      layer.style.width = "100%";
    });

    crossBtn.addEventListener("click", () => {
      layer.style.width = "0%";
    });
  }, []);

  console.log(router.pathname)

  return (
    <>
      {/* Main Navbar for Large Screen */}
      <div className="border-b border-gray-200 bg-white">
        <nav className="flex relative items-center justify-between max-w-[1300px] m-auto py-4 px-[15px] lg:flex-row flex-col-reverse">
          <div className=" absolute top-6 left-8 md:block lg:hidden">
            <i
              id="menuIcon"
              className="fa-solid fa-bars text-xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all"
            ></i>
          </div>
          <div>
            <h3 className=" text-[#6F5243] font-semibold my-2 text-3xl">
              YAMM BUFFET
            </h3>
          </div>

          <div className=" lg:flex gap-4 items-center hidden">
            {navLinks?.map((v, i) => (
              <Link key={i} href={v.link} className={router.pathname == v.link ? "navlinkRouter" : null}>
                {v.label}
              </Link>
            ))}
          </div>

          <div>
            <Link className=" text-lg" href={"/"}>
              0232832298
            </Link>
          </div>
        </nav>
      </div>

      {/* Responsive Navbar For Mobiles ---------------------------------  */}
      <div>
        <div
          id="layer"
          className=" absolute top-0 left-0 bg-gray-100 h-full w-0 overflow-hidden z-50"
        >
          <i
            id="cross"
            className="fa-solid fa-xmark float-right p-5 text-xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all"
          ></i>
          <div className=" flex flex-col p-12">
            {navLinks?.map((v, i) => (
              <Link
                key={i}
                className=" text-gray-600 px-3 mb-4 pb-3 border-b border-b-gray-300 hover:text-black transition-all"
                href={v.link}
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
