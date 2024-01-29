import axios from "axios";
import Link from "next/link";
import Image from "next/image";
// import queryStr from "query-string";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Toaster, toast } from "react-hot-toast";
import React, { useEffect, useRef, useState } from "react";
import { format, render, cancel, register } from "timeago.js";

const tableHeader = [
  { lable: "Date", align: "left" },
  { lable: "Picture", align: "left" },
  { lable: "Name", align: "left" },
  { lable: "Price", align: "left" },
  { lable: "Actions", align: "center" },
];

// Jodit React ---------------------
// import dynamic from "next/dynamic";
// const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const index = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState({ title: "" });

  // Fetch BLog Here --------------------------------------------------/
  const {
    data: productData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["products", filterByName], async () => {
    try {
      const res = await axios.get(`/api/price`);
      return res.data.message;
    } catch (error) {
      throw new Error(error.message);
    }
  });

  // Input Hadler For Searching by Name ------------------------------------------/
  const searchInputHanler = (e) => {
    setFilterByName({ ...filterByName, [e.target.name]: e.target.value });
  };

  // delete Product by Slug ------------------------------------------------------/
  const delPost = async (_id) => {
    try {
      if (window.confirm("Are you sure you want to delete") === true) {
        const del = await fetch(`/api/price/${_id}`, {
          method: "DELETE",
        });

        if (del) {
          toast.success("Item Deleted Successfully");
          refetch();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Data Basis Filter by Name Function ------------------------------------/
  const fetchData = async () => {
    try {
      setLoading(true);
      await refetch();
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter Data On Filteration --------------------------------------------------/
  useEffect(() => {
    fetchData();
  }, [filterByName]);

  //  /--------------------------------------------------
  //  ---------------------- UPLOAD NEW BLOG STARTED HERE
  //  --------------------------------------------------/
  const editor = useRef(null);
  const [file, setFile] = useState("");
  const [isFetching, setIsfetching] = useState(false);

  const [menuData, setMenuData] = useState({
    itemName: "",
    imgAlt: "",
    price: 0,
    desc: "",
  });

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

    if (file) {
      try {
        const ImageURL = await UploadImageToCloudinary();
        const res = await axios.post("/api/price", {
          ...menuData,
          img: ImageURL,
        });

        if (res) {
          toast.success("Item added succesfully");
          window.location.reload();
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
      {/* <Toaster /> */}
      {/* TABLE STARTED ---------------------------------------------------------------------------  */}
      <div className="w-full">
        <div className="overflow-x-auto w-full border rounded-2xl">
          <div className="bg-white p-4 flex justify-between items-center flex-col gap-3 lg:flex-row w-full">
            <h2 className="text-xl font-semibold text-indigo-600">Menu</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="">
                  <input
                    name="title"
                    value={filterByName.title}
                    onChange={searchInputHanler}
                    placeholder="Search here..."
                    className="relative border border-gray-200 text-gray-400 text-sm pl-3 px-2 py-[6px] lg:w-[12vw] w-[25vw] rounded-full focus:ring-2 transition-colors focus:outline-none focus:text-gray-400"
                  />
                  <span>
                    {loading ? (
                      <i className="fa-solid fa-spinner absolute top-[30%] right-3 text-xs text-gray-500 dashboardSearchSlide"></i>
                    ) : (
                      <i className="absolute top-1/2 -translate-y-1/2 right-3 border-l pl-2 cursor-pointer text-gray-400 hover:text-gray-500 bx bx-search-alt-2"></i>
                    )}
                  </span>
                </div>
              </div>
              <div
                onClick={() => setShowForm(true)}
                className="h-8 w-8 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer"
              >
                <i
                  title="Add New Blog"
                  className="fa-solid fa-plus text-white text-xs"
                ></i>
              </div>
            </div>
          </div>
          <table className="text-sm min-w-[1000px] w-full text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                {tableHeader.map((value, index) => {
                  return (
                    <th
                      scope="col"
                      key={index}
                      className={`px-6 py-3 text-${value.align}`}
                    >
                      {value.lable}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {productData?.map((v, i) => {
                return (
                  <tr key={i} className="bg-white border-b border-gray-100">
                    <td className="px-6 py-2 text-xs">
                      {format(new Date(v.createdAt), "en_US")}
                    </td>
                    <td
                      scope="row"
                      className="px-6 flex border-0 items-center py-2 font-medium text-gray-600 whitespace-nowrap"
                    >
                      <div className="w-10 h-10 mr-3 border border-gray-100 rounded-full overflow-hidden">
                        <Image
                          height={500}
                          width={500}
                          priority="true"
                          className="w-full h-full object-cover"
                          src={v.img}
                          alt="Image Here"
                        />
                      </div>
                      {v.name}
                    </td>
                    <td className="px-6 py-2"> {v.itemName} </td>
                    <td className="px-6 py-2"> {v.price} </td>
                    <td className="px-6 py-2 text-lg text-center">
                      <Link href={`/blog/${v.slug}`}>
                        <i
                          title="View"
                          className="fa fa-solid fa-eye px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                        ></i>
                      </Link>
                      <Link href={`prices/${v._id}`}>
                        <i
                          title="Edit"
                          className="fa-solid fa-pen-to-square px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-gray-400 text-sm"
                        ></i>
                      </Link>
                      <i
                        title="Delete"
                        onClick={() => delPost(v._id)}
                        className="fa fa-solid fa-trash px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-full text-red-400 text-sm"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Pagination start  ------------------------------ */}
          {/* <div className=" flex items-center justify-end pr-10 gap-5 w-full py-5 border-b border-gray-100 bg-gray-50">
            <span className=" whitespace-nowrap flex items-center justify-center text-sm text-slate-500">
              {productData?.page} of {productData?.ending} to{" "}
              {productData?.count}
            </span>
            <div className="flex border gap-4 px-4 py-1 rounded-full">
              <i
                onClick={() =>
                  router.push(`/portal/blog?page=${productData?.page - 1}`)
                }
                className={`fa-solid fa-angle-left p-1 text-orange-600 text-xs border-r pr-4 ${
                  productData?.starting == 1
                    ? "cursor-not-allowed text-slate-300"
                    : "cursor-pointer hover:text-orange-500"
                }`}
              ></i>

              <i
                onClick={() => {
                  if (productData?.ending < productData?.count) {
                    router.push(`/portal/blog?page=${productData?.page + 1}`);
                  }
                }}
                className={`fa-solid fa-angle-right text-orange-600 text-xs p-1 ${
                  productData?.ending >= productData?.count
                    ? "cursor-not-allowed text-slate-300"
                    : "cursor-pointer hover:text-orange-500"
                }`}
              ></i>
            </div>
          </div> */}
        </div>
      </div>
      {/* NEW MODEL FOR NEW BLOG ---------------------------------------------------------------------------  */}
      <div
        style={{
          visibility: showForm ? "visible" : "hidden",
          opacity: showForm ? "1" : "0",
          transition: ".4s",
        }}
        className="fixed z-10 top-0 left-0 w-full h-screen border-red-600 backdrop-blur-[2px] bg-[#00000094] overflow-auto"
      >
        <div
          className={`${
            showForm ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } bg-white duration-500 mx-auto my-8 relative p-4 max-w-xl lg:max-w-4xl border rounded-lg max-h-[92vh] overflow-x-auto`}
        >
          {/* -------------------------- UPLOAD NEW BLOG HERE -------------------------------------- */}
          <div className="FormParentDiv">
            {/* <Toaster></Toaster> */}

            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex items-center justify-between">
                <h1 className=" text-3xl   text-indigo-600 font-semibold">
                  Add Items
                </h1>
                <div
                  onClick={() => setShowForm(false)}
                  className=" flex items-center justify-center h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-100"
                >
                  <i className="fa-solid fa-xmark text-gray-400"></i>
                </div>
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
                {file && (
                  <div className=" max-h-[10vh] flex justify-end w-[100%] p-3">
                    <i
                      className="fa-solid fa-trash text-red-700 hover:text-red-500 cursor-pointer"
                      onClick={() => setFile("")}
                    ></i>
                  </div>
                )}

                <div className="avatar-upload">
                  {file ? (
                    <Image
                      height={500}
                      width={500}
                      priority="true"
                      alt="photo alt here"
                      className="avatarpreview"
                      src={URL.createObjectURL(file)}
                    />
                  ) : (
                    <>
                      <div className=" cursor-pointer border-2 border-indigo-600 rounded-[100%] p-3 ">
                        <label
                          htmlFor="avatarinput"
                          className="uplaodImageLable"
                        >
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
        </div>
      </div>
    </>
  );
};

export default index;
