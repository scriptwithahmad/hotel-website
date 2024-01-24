import Link from "next/link";
import React from "react";

const index = () => {
  const handleDownload = () => {
    const pdfUrl = "/image/sign/menu.jpg";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute and trigger a click event
    link.download = "menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Menu Second Section Start Here --------------------------------------- */}
      <h1 className="text-center my-6 text-2xl font-semibold">XMAS MENU</h1>
      <div className="max-w-[1200px] m-auto my-10 px-5 lg:px-6 2xl:px-0">
        <img
          alt="Menu Image Here"
          src="/image/sign/menu1.webp"
          className=" aspect-video w-full object-cover shadow-2xl mb-4"
        />
        <img
          alt="Menu Image Here"
          src="/image/sign/menu2.webp"
          className=" aspect-video w-full object-cover shadow-2xl"
        />
      </div>

      {/* Menu First Section Start Here --------------------------------------- */}
      <div className=" text-center py-8">
        <h1 className=" text-2xl font-semibold mb-8">MENU</h1>
        <button onClick={handleDownload} className="text-[rgb(94,94,94)]">
          Download File
          <i class="fa-solid fa-chevron-right ml-2 text-sm"></i>
        </button>
      </div>
      <div className="max-w-[1200px] m-auto my-12 border-2 mx-5 lg:mx-6 2xl:mx-0">
        <img src="/image/sign/menu.jpg" alt="image Here" />
      </div>
    </div>
  );
};

export default index;
