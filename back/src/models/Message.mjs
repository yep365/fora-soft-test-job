import mongoose, { Schema, Document } from "mongoose";

const MessageSchema = new Schema(
  {
    text: { type: String, require: true },
    room: { type: Schema.Types.ObjectId, ref: "Room", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    usePushEach: true,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
