import dbConnect from "@/config/dbConnect";
import notebook from "@/models/notebook";

export default async function handler(req, res) {
  dbConnect();

  try {
    switch (req.method) {
      case "POST":
        const add = await notebook.create(req.body);
        res.status(200).json({
          success: true,
          message: add,
        });

        break;

      case "GET":
        try {
          const get = await notebook.find();
          res.status(200).json({
            success: true,
            message: get,
          });
        } catch (error) {
          console.log(error);
        }

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
