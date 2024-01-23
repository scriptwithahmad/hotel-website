import dbConnect from "@/config/dbConnect";
import menuModel from "../../../models/menu";

export default async function handler(req, res) {
  dbConnect();

  try {
    const findSingleMenu = await menuModel.findById(req.query._id);

    if (!findSingleMenu) {
      res.status(404).json({
        success: false,
        message: "items not found",
      });
      return;
    }

    switch (req.method) {
      case "GET":
        const finding = await menuModel.findById(req.query._id);
        res.status(200).json({
          success: true,
          message: finding,
        });

        break;
      case "DELETE":
        const remove = await menuModel.findByIdAndDelete(req.query._id);
        res.status(200).json({
          success: true,
          message: "Item removed succesfully",
        });

        break;

      case "PUT":
        const update = await menuModel.findByIdAndUpdate(
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
