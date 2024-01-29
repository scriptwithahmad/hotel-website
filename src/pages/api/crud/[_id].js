import dbConnect from "@/config/dbConnect";
import notebook from "@/models/notebook";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "DELETE":
      try {
        const del = await notebook.findByIdAndDelete(req.query._id);

        if (!del) {
          res.status(404).json({
            success: false,
            message: "items not found",
          });
          return;
        }

        res.status(200).json({
          success: true,
          message: "deleted successfully!",
        });
      } catch (error) {
        console.log(error);
      }

      break;

    case "PUT":
      try {
        const update = await notebook.findByIdAndUpdate(
          req.query._id,
          { $set: req.body },
          { new: true }
        );

        if (!update) {
          return res.status(404).json({
            success: false,
            message: "Item not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Item updated succesfully",
          update,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      res.status(400).json({
        success: false,
        message: "Invalid request method",
      });
      break;
  }
}
