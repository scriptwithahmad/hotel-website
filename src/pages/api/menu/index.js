import dbConnect from "@/config/dbConnect";
import menuModel from "../../../models/menu";

export default async function handler(req, res) {
  dbConnect();

  try {
    switch (req.method) {
      case "POST":
        const add = await menuModel.create(req.body);
        res.status(200).json({
          success: true,
          message: add,
        });

        break;

      case "GET":
        const finding = await menuModel.find();
        res.status(200).json({
          success: true,
          message: finding,
        });

        break;

      default:
        break;
    }
  } catch (error) {
    // Error Handle for Required Fields
    if (error.message?.split(":")[2]?.split(",")[0]?.trim()) {
      var errMessage = error.message.split(":")[2].split(",")[0].trim();
      return res.status(400).json({
        success: false,
        message: errMessage,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
