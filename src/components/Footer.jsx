import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#6F5243] py-6 text-[rgb(220,220,220)] text-sm">
        <div className=" max-w-[1200px] m-auto my-4">
          <div className="flex items-center justify-between lg:flex-row flex-col">
            <h2 className="2xl:mb-0 mb-3">
              Copyright © 2023 Yamm Buffet - All Rights Reserved.
            </h2>
            <span>Powered by GoDaddy Website Builder</span>
          </div>
          <h2 className=" text-center my-5">PRIVACY POLICY</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
