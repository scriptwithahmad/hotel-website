import axios from "axios";
import Link from "next/link";
import Image from "next/image";
// import queryStr from "query-string";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Toaster, toast } from "react-hot-toast";
import React, { useEffect, useRef, useState } from "react";

const priceEdit = () => {
  const editor = useRef(null);
  const router = useRouter();
  const ObjID = router?.query._id;
  const [file, setFile] = useState("");
  const [isFetching, setIsfetching] = useState(false);

  const [menuData, setMenuData] = useState({
    itemName: "",
    imgAlt: "",
    price: 0,
    desc: "",
  });

  // fetching the response of the menu items
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get(`/api/price/${ObjID}`);

      setMenuData({
        itemName: res?.data?.message?.itemName,
        imgAlt: res?.data?.message?.imgAlt,
        price: res?.data?.message?.price,
        img: res?.data?.message?.img,
        desc: res?.data?.message?.desc,
      });
    };

    fetchMenu();
  }, []);

  const UploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "Blog-images");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/sameer-13/image/upload",
        {
          body: data,
          method: "POST",
        }
      );
      const jsonImg = await res.json();
      return jsonImg.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMenuData({ ...menuData, [name]: value });
  };

  // SUBMIT BLOG ------------------------/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsfetching(true);

    if (file || menuData.img) {
      try {
        const ImageURL = await UploadImageToCloudinary();
        const res = await axios.put(`/api/price/${ObjID}`, {
          ...menuData,
          img: ImageURL,
        });

        if (res) {
          toast.success("Item updated succesfully");
          window.location.reload();
          router.push("/portal/prices");
        }

        setMenuData({
          itemName: "",
          imgAlt: "",
          price: 0,
          desc: "",
        });
        setFile(null);
      } catch (error) {
        if (error?.response?.data?.message) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
        }
      } finally {
        setIsfetching(false);
      }
    } else {
      toast.error("Please upload the image");
      setIsfetching(false);
    }
  };

  return (
    <>
      <div className=" p-3 rounded-md bg-white">
        <Toaster></Toaster>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center justify-between">
            <h1 className=" text-3xl font-semibold  text-indigo-600">
              Edit Items
            </h1>
          </div>

          {/* NAME */}
          <div className="my-4">
            <label
              className="text-sm text-gray-500 tracking-wider"
              htmlFor="itemName"
            >
              Item name
            </label>
            <input
              id="itemName"
              type="text"
              name="itemName"
              autoComplete="off"
              onChange={handleInput}
              value={menuData.itemName}
              placeholder="Enter the item name"
              className=" border p-2 w-full rounded-md mt-1 text-gray-400 focus:text-gray-500 placeholder:text-gray-300 outline-none focus:ring-2"
            />
          </div>

          {/* PRICE */}
          <div className="my-4">
            <label
              className="text-sm text-gray-500 tracking-wider"
              htmlFor="price"
            >
              Item name
            </label>
            <input
              id="price"
              type="number"
              name="price"
              autoComplete="off"
              onChange={handleInput}
              value={menuData.price}
              placeholder="Enter the item price"
              className=" border p-2 w-full rounded-md mt-1 text-gray-400 focus:text-gray-500 placeholder:text-gray-300 outline-none focus:ring-2"
            />
          </div>

          {/* Decs */}
          <div className="my-4">
            <label
              className="text-sm text-gray-500 tracking-wider"
              htmlFor="desc"
            >
              Item Description
            </label>
            <input
              id="desc"
              type="text"
              name="desc"
              autoComplete="off"
              onChange={handleInput}
              value={menuData.desc}
              placeholder="Enter the item name"
              className=" border p-2 w-full rounded-md mt-1 text-gray-400 focus:text-gray-500 placeholder:text-gray-300 outline-none focus:ring-2"
            />
          </div>

          {/* IMAGE UPLOAD HERE  */}
          <label
            className="text-sm text-gray-500 tracking-wider mb-2 block"
            htmlFor="name"
          >
            Add Image
          </label>
          <div className=" border border-gray-200  rounded-sm flex items-center  flex-col justify-center min-h-[30vh]">
            {(file || menuData.img) && (
              <div className=" max-h-[10vh] flex justify-end w-[100%] p-3">
                <i
                  className="fa-solid fa-trash text-red-700 hover:text-red-500 cursor-pointer"
                  onClick={() =>
                    menuData.img ? setMenuData({ img: null }) : setFile("")
                  }
                ></i>
              </div>
            )}

            <div className="avatar-upload">
              {file || menuData.img ? (
                <Image
                  height={500}
                  width={500}
                  priority="true"
                  alt="photo alt here"
                  className="avatarpreview"
                  src={menuData.img ? menuData.img : URL.createObjectURL(file)}
                />
              ) : (
                <>
                  <div className=" cursor-pointer border-2 border-indigo-600 rounded-[100%] p-3 ">
                    <label htmlFor="avatarinput" className="uplaodImageLable">
                      <i className="bx bx-upload cursor-pointer text-[30px]  text-indigo-600"></i>
                    </label>
                  </div>
                  <input
                    type="file"
                    id="avatarinput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </>
              )}
            </div>
          </div>

          {/* Image Alternate Text */}
          <div className="my-4">
            <label
              className="text-sm text-gray-500 tracking-wider"
              htmlFor="imgAlt"
            >
              Image Alternate Text
            </label>
            <input
              type="text"
              id="imgAlt"
              name="imgAlt"
              autoComplete="off"
              onChange={handleInput}
              value={menuData.imgAlt}
              placeholder="Enter the Image Alternate"
              className=" border p-2 w-full rounded-md mt-1 text-gray-400 focus:text-gray-500 placeholder:text-gray-300 outline-none focus:ring-2"
            />
          </div>
          {/* SUBMIT BUTTION  */}
          <div className="mt-4 flex justify-end w-full">
            <button
              disabled={isFetching}
              className=" border-2 border-indigo-400 px-3 py-1 rounded-md text-indigo-400 "
              type="submit"
            >
              {isFetching ? "Processing..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default priceEdit;
