import mongoose from "mongoose";
const priceSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Menu Item Image is required"],
    },
    imgAlt: {
      type: String,
      required: [true, "Image alternate text is required"],
    },
    itemName: {
      type: String,
      required: [true, "Item name is requried"],
    },
    price: {
      type: Number,
      required: [true, "Item price is required"],
    },
    desc: {
      type: String,
      required: [true, "Item description is required"],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.prices ||
  mongoose?.model("prices", priceSchema);
