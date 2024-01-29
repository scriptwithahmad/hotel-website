import Image from "next/image";
import React from "react";

const images = [
  "/gallery/1.webp",
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/6.webp",
  "/gallery/7.webp",
  "/gallery/9.webp",
  "/gallery/10.webp",
  "/gallery/11.webp",
  "/gallery/12.webp",
  "/gallery/13.webp",
  "/gallery/14.webp",
  "/gallery/15.webp",
  "/gallery/16.webp",
  "/gallery/17.webp",
  "/gallery/18.webp",
  "/gallery/19.webp",
];

const index = () => {
  return (
    <div>
      <h1 className="text-center my-6 text-2xl font-semibold">PHOTO GALLERY</h1>
      <div className=" max-w-[1200px] m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 my-6 px-5 lg:px-4 2xl:px-0">
        {images.map((v, i) => {
          return (
            <Image
              src={v}
              key={i}
              width={500}
              height={500}
              priority="true"
              alt="Image Here"
              className=" w-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
