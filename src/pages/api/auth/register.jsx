import dbConnect from "@/config/dbConnect";
import userModel from "../../../models/user"
import bcrypt from "bcrypt"


export default async function handler(req, res) {
  dbConnect();

  try {
   
    if (!req.body.userName) {
      res.status(400).json({
        success: false,
        message: "Username is required",
      });
      return;
    }

    if (!req.body.password) {
      res.status(400).json({
        success: false,
        message: "Password is required",
      });
      return;
    }

    if (!req.body.email) {
      res.status(400).json({
        success: false,
        message: "Email is required",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (error) {
    if (error?.code === 11000) {
      res.status(409).json({
        success: false,
        message: "Email or Username Already in Use",
      });
    } else if (error.keyPattern.userName) {
      res.status(409).json({
        success: false,
        message: "Username Already in Use!",
      });
    }
    return;
  }
}