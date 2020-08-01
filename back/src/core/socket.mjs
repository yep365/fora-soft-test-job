import socket from "socket.io";

export default (http) => {
  const io = socket(http);

  io.on("connection", (socket) => {
    socket.on("ROOM:NEW_USER", (room, name) => {
      console.log("1111");
      socket.join(room);
      socket.roomId = roomId;
      // roomsDB[room].users[socket.id] = name;
      socket.to(room).broadcast.emit("USER:CONNECTED", name);
    });
    socket.on("ROOM:SEND_MESSAGE", (message) => {
      console.log("2222");
      socket.broadcast.emit("ROOM:MESSAGE", {
        message: message,
        name: name,
      });
    });
    socket.on("disconnect", () => {
      console.log("disconnect");
      socket.broadcast.emit("ROOM:USER_DISCONNECTED", users[socket.id]);
      delete users[socket.id];
    });
  });
};
