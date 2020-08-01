import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model("Room", RoomSchema);

export default RoomModel;
