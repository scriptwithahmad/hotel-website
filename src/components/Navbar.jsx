import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "PRICES",
      link: "/",
    },
    {
      label: "MENU",
      link: "/",
    },
    {
      label: "NEWS",
      link: "/",
    },
    {
      label: "GALLERY",
      link: "/",
    },
  ];
  return (
    <>
    <div className="border border-black bg-[#F8F4EC]">
    <nav className="flex items-center justify-between max-w-[1300px] m-auto py-2 px-[15px]">
        <div>
          <h3 className=" text-[#6F5243] text-3xl">YAMM BUFFET</h3>
        </div>

        <div className=" flex gap-4 items-center">
          {navLinks?.map((v, i) => (
            <Link className=" text-gray-600" href={v.link}>{v.label}</Link>
          ))}
        </div>

        <div>
          <Link className=" text-xl" href={"/"}>0232832298</Link>
        </div>
      </nav>
    </div>
 
    </>
  );
};

export default Navbar;
