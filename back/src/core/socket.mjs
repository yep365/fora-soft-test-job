import socket from "socket.io";
import { UserModel } from "../models/index.mjs";

export default (http) => {
  const io = socket(http);

  io.on("connection", (socket) => {
    socket.on("ROOM:JOIN", (roomId, name) => {
      socket.roomId = roomId;
      socket.name = name;
      socket.join(roomId);
      socket.to(roomId).broadcast.emit("USER:CONNECTED", name);
    });
    socket.on("ROOM:SEND_MESSAGE", (roomId, message) => {
      console.log("2222");
      socket.broadcast.emit("ROOM:NEW_MESSAGE", {
        message: message,
        name: name,
      });
    });
    socket.on("disconnect", () => {
      socket
        .to(socket.roomId)
        .broadcast.emit("ROOM:USER_DISCONNECTED", socket.name);
    });
  });

  return io;
};
