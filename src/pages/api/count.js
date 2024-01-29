import dbConnect from "@/config/dbConnect";
import userModel from "../../models/user";
import priceModel from "../../models/price";
import menuModel from "../../models/menu";

export default async function handler(req, res) {
  dbConnect();

  try {
    const menu = await menuModel.find().count();
    const price = await priceModel.find().count();
    const user = await userModel.find().count();

    res.status(200).json({
      success: true,
      message: {
        menu,
        price,
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
