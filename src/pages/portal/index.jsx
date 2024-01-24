import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const index = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const fetchCount = async () => {
      const res = await axios.get("/api/count");
      setCount(res?.data?.message)
    };

    fetchCount();
  }, []);

  return (
    <>
      <div>
        <div className="max-w-[1300px] m-auto">
          <div className=" flex  gap-3 flex-wrap   max-md:justify-center ">
            {/* Dashboard Card 01 -----------*/}
            <div className="bg-white rounded-lg py-5 px-7 flex  flex-1 globalShadow">
              <div className=" flex-1">
                <h2 className=" text-slate-600 text-base mb-2">Menu</h2>
                <span className=" text-slate-800 font-semibold text-lg">{count.menu}</span>
                <p className=" my-2 text-sm text-slate-400 font-light">
                  <span className="text-[#22c55e]">0</span> Newly Added
                </p>
              </div>
              <div>
                <i className="bx bxl-blogger text-[20px] bg-cyan-200 text-cyan-700 p-2 rounded-md"></i>
              </div>
            </div>
            {/* Dashboard Card 02 -----------*/}
            <div className="bg-white rounded-lg py-5 px-7 flex flex-1 globalShadow">
              <div className=" flex-1">
                <h2 className=" text-slate-600 text-base mb-2">
                  Items & Prices
                </h2>
                <span className=" text-slate-800 font-semibold text-lg">{count.price}</span>
                <p className=" my-2 text-sm text-slate-400 font-light">
                  <span className="text-[#22c55e]">0</span> Newly Added
                </p>
              </div>
              <div>
                <i className="bx bxs-news text-[20px]  bg-emerald-200 text-green-700 p-2 rounded-md"></i>
              </div>
            </div>
            {/* Dashboard Card 03 -----------*/}
            <div className="bg-white rounded-lg py-5 px-7 flex flex-1 globalShadow">
              <div className=" flex-1">
                <h2 className=" text-slate-600 text-base mb-2">Users</h2>
                <span className=" text-slate-800 font-semibold text-lg">{count.user}</span>
                <p className=" my-2 text-sm text-slate-400 font-light">
                  <span className="text-[#22c55e]">0</span> Newly Added
                </p>
              </div>
              <div>
                <i className="bx bxs-book-alt text-[20px]  bg-fuchsia-200 text-fuchsia-700 p-2 rounded-md"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
