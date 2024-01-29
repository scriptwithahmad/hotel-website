import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.notebook ||
  mongoose?.model("notebook", noteSchema);
