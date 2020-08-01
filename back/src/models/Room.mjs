import mongoose, { Schema, Document } from "mongoose";

const RoomSchema = new Schema(
  {
    users: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const RoomSchema = mongoose.model("Room", RoomSchema);

export default RoomSchema;
