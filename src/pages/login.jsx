import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
// import TopBanner from "@/components/TopBanner";

const login = () => {
  const router = useRouter();
  const [isError, setIsError] = useState("");
  const [isLogInUser, setIsLoginUser] = useState(false);
  const [user, setUser] = useState("");
  const [LoginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const HandleLogin = (e) => {
    setLoginUser({ ...LoginUser, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoginUser(true);
      const login = await axios.post("/api/auth/login", LoginUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });




      if (login?.data?.success) {
        toast.success("User Logged In");
        router.push("/portal");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        setIsError(error?.response?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoginUser(false);
    }
  };

  return (
    <>
      {/* <Toaster></Toaster> */}

      {/* <TopBanner Heading={"Login"} Route={"Login"}></TopBanner> */}

      <div className="outerDiv">
        <div className="signIn_Outer_Div">
          <div className="sign_In_Shape">
            <img
              src="image/sign/man-3.png"
              alt="Image Here"
              className="man1"
            ></img>
            <img
              src="image/sign/man-2.png"
              alt="Image Here"
              className="man2"
            ></img>
            <img
              src="image/sign/circle.png"
              alt="Image Here"
              className="circle"
            ></img>
            <img
              src="image/sign/zigzag.png"
              alt="Image Here"
              className="zigzag wavey"
            ></img>
            <img
              src="image/sign/dot.png"
              alt="Image Here"
              className="dot"
            ></img>
            <img
              src="image/sign/sign-up.png"
              alt="Image Here"
              className="sign_Up"
            ></img>
            <img
              src="image/sign/flower.png"
              alt="Image Here"
              className="flower"
            ></img>
          </div>
          <div className="sign_In_Inner">
            <div className="sign_In_Heading">
              <h2>Sign in</h2>
              <p>it you dont have an account, get in touch with admin!!!!</p>
            </div>
            <div className="sign_In_Lower">
              <div className="sign_In_Wrapper">
                <div className="sign_In_Form">
                  <form onSubmit={HandleSubmit}>
                    <div className="sign_In_Input_Outer">
                      <label htmlFor="">Work Email</label>
                      <div className="sign_In_Input">
                        <input
                          type="email"
                          placeholder="e-mail address"
                          onChange={HandleLogin}
                          value={LoginUser.email}
                          autoComplete="off"
                          name="email"
                        ></input>
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                    </div>
                    <div className="sign_In_Input_Outer">
                      <label htmlFor="">Password</label>
                      <div className="sign_In_Input">
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={HandleLogin}
                          value={LoginUser.password}
                          name="password"
                        ></input>
                        <i className="fa-solid fa-lock"></i>
                      </div>
                    </div>
              
                    <button
                      type="submit"
                      disabled={isLogInUser}
                      className="signInSubmitBtn"
                    >
                      {" "}
                      {isLogInUser ? "Logging In.." : "Login"}
                    </button>

                    <div className="errDiv">
                      <span>{isError}</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
