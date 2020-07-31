import express from "express";
import socket from "socket.io";

import { roomsDB } from "../core/index.mjs";

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
    res.status(403).json({ status: "success", message: roomsDB[roomId] });
  };
}
