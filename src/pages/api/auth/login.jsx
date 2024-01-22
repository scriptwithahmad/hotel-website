import bcrypt from "bcrypt";
import { serialize } from "cookie";
import dbConnect from "@/config/dbConnect";
import userModel from "../../../models/user"
import { GenAccessToken } from "@/helpers/jwt";


export default async function handler(req, res) {
    dbConnect();
        try {
          // De-Structuring both the email & password
  
          const { email, password } = req.body;
  
          //Check if the password and email has been provided
  
          if (!email || !password) {
            res.status(400).json({
              success: false,
              message: "Email & Password is required",
            });
            return;
          }
  
          //find user by email
  
          const foundUser = await userModel.findOne({ email });
  
          if (!foundUser) {
            res.status(400).json({
              success: false,
              message: "Invalid email or password",
            });
            return;
          }
  
          // Compare provided password with hashed password
  
          const IsPasswordValid = await bcrypt.compare(
            password,
            foundUser?.password
          );
  
          if (!IsPasswordValid) {
            res.status(401).json({
              success: false,
              message: "Invalid Password",
            });
            return;
          }
  
          const AccessToken = await GenAccessToken({
            id: foundUser._id,
          });
  
          // setting the cookie in the headers
          res.setHeader(
            "Set-Cookie",
            serialize("AccessToken", AccessToken, {
              path: "/",
              httpOnly: true,
              secure: true,
            })
          );
  

          // sending the user data in the context
          var user = {
            id: foundUser._id,
            email: foundUser.email,
            userName: foundUser.userName,
            isAdmin: foundUser.isAdmin,
          };
  
  
          res.status(201).json({
            user,
            success: true,
          });
  
         
        } catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
        }
   
  }