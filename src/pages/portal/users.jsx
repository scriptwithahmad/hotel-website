import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastBar } from "react-hot-toast";

const users = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [AddUser, setAddUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setAddUser({ ...AddUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", AddUser);
      if (res?.data?.success) {
        toast.success("Signed Up");
      }

      setAddUser({
        userName: "",
        email: "",
        password: "",
      });
      setIsError("");
    } catch (error) {
      if (error?.response?.data?.message) {
        setIsError(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-[500px]">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="bg-white shadow-md  rounded-md px-8 pt-11 pb-11 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              onChange={handlechange}
              value={AddUser.userName}
              name="userName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              onChange={handlechange}
              value={AddUser.email}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              onChange={handlechange}
              value={AddUser.password}
              name="password"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />

            {/* error state handling */}
            <p className="text-red-500 text-xs italic">{isError}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? "Processing..." : "Sign up"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 script . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default users;
