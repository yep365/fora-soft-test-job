import socket from "socket.io";
import { getDeleteIndex } from "../utils/helpers/index.mjs";

export default (http) => {
  const io = socket(http);
  let users = [];
  io.on("connection", (socket) => {
    socket.on("ROOM:JOIN", (roomId, name) => {
      socket.roomId = roomId;
      socket.name = name;
      socket.join(roomId);
      users.push({
        room: roomId,
        userName: name,
      });
      socket.to(roomId).broadcast.emit("USER:CONNECTED", name, true);
      socket.to(roomId).emit("ROOM:ACTIVE_USERS", users);
    });

    socket.on("ROOM:SEND_MESSAGE", (roomId, message) => {
      const newMessage = {
        text: message.text,
        user: { name: message.name },
        date: message.date,
      };
      socket.to(roomId).broadcast.emit("ROOM:NEW_MESSAGE", newMessage);
    });

    socket.on("disconnect", () => {
      getDeleteIndex(users, socket.name, socket.roomId).then((index) => {
        //Deleting disconnected user from an array of active one's
        users.splice(index, 1);
        socket
          .to(socket.roomId)
          .broadcast.emit("ROOM:USER_DISCONNECTED", socket.name, false);
        socket.to(socket.roomId).emit("ROOM:ACTIVE_USERS", users);
      });
    });
    return socket;
  });
};
