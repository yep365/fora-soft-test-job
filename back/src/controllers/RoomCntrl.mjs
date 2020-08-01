import express from "express";
import socket from "socket.io";

export default class RoomController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    const roomId = req.params.roomId;
    if (roomsDB[roomId] === "undefined") {
      return res
        .status(404)
        .json({ status: "error", message: "Room not found" });
    }
    return res
      .status(200)
      .json({ status: "success", message: roomsDB[roomId] });
  };
  createRoom = (req, res) => {
    try {
      const user = req.user._id;
      const newRoom = Math.random(10000);
      while (Object.keys(roomsDB).some(newRoom)) {
        newRoom = Math.random(10000);
      }
      roomsDB.push(newRoom);
      res.status(200).json({ status: "success", message: roomsDB[newRoom] });
      this.io.emit("SERVER:ROOM_CREATED", {
        dialog: newRoom,
      });
    } catch (e) {
      res.json({ status: "error", message: e });
    }
  };
}
