import mongoose from "mongoose";

const contentSchema = mongoose.Schema(
  {
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const Content = mongoose.model("Content", contentSchema);
