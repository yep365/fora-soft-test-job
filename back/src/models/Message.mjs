import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
    usePushEach: true,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
