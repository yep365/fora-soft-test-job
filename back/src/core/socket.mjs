import socket from "socket.io";
import http from "http";

import roomsDB from "./roomsDB.mjs";

export default (http) => {
  const io = socket(http);

  io.on("connection", (socket) => {
    socket.on("USER:NEW_USER", (room, name) => {
      socket.join(room);
      roomsDB[room].users[socket.id] = name;
      socket.to(room).broadcast.emit("USER:CONNECTED", name);
    });
  });
};
