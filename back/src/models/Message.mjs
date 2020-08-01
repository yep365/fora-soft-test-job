import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    text: { type: String, require: true },
    // room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    usePushEach: true,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
