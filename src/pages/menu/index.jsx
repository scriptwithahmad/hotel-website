import Link from "next/link";
import React from "react";
import Image from "next/image";

const index = ({ res }) => {
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
        {res?.map((v, i) => (
          <Image
            key={i}
            width={400}
            height={400}
            alt={v.imgAlt}
            src={v.img}
            className=" my-5 w-full h-auto object-cover"
          ></Image>
        ))}
      </div>

      {/* Menu First Section Start Here --------------------------------------- */}
      <div className=" text-center py-8">
        <h1 className=" text-2xl font-semibold mb-8">MENU</h1>
        <button onClick={handleDownload} className="text-[rgb(94,94,94)]">
          Download File
          <i className="fa-solid fa-chevron-right ml-2 text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const data = await fetch("https://yammbuffet.vercel.app/api/menu");
  const res = await data.json();

  return {
    props: { res: res?.message },
  };
}
