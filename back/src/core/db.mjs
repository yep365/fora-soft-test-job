import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fora-chat",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
