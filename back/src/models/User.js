import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = mongoose.model("User", UserSchema);

export default UserSchema;
