import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Menu image is required"],
    },
    imgAlt:{
      type:String,
      required:[true, "Image alternate text is required"]
    },
    name: {
      type: String,
      required: [true, "Please give this menu a name"],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.menus || mongoose?.model("menus", menuSchema);
