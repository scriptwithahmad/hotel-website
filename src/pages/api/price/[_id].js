import dbConnect from "@/config/dbConnect";
import priceModel from "../../../models/price"


export default async function handler(req, res) {
  dbConnect();

  try {
    const findSingleMenuItem = await priceModel.findById(req.query._id);
    if (!findSingleMenuItem) {
      res.status(404).json({
        success: false,
        message: "items not found",
      });
      return;
    }

    switch (req.method) {
      case "GET":
        const finding = await priceModel.findById(req.query._id);
        res.status(200).json({
          success: true,
          message: finding,
        });

        break;
      case "DELETE":
        const remove = await priceModel.findByIdAndDelete(req.query._id);
        res.status(200).json({
          success: true,
          message: "Item removed succesfully",
        });

        break;

      case "PUT":
        const update = await priceModel.findByIdAndUpdate(
          req.query._id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json({
          success: true,
          message: "Item updated succesfully",
        });

        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
