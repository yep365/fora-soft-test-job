import express from "express";
import socket from "socket.io";

import { UserModel, RoomModel, MessageModel } from "../models/index.mjs";

export default class RoomController {
  constructor(io) {
    this.io = io;
  }
  createRoom = (req, res) => {
    try {
      const userId = req.body.userId;

      const postData = { users: userId };

      const newRoom = new RoomModel(postData);
      newRoom.save().then((roomObj) => {
        return res.status(200).json({
          status: "success",
          roomId: roomObj._id,
        });
      });
    } catch (e) {
      res.json({ status: "error", message: e });
    }
  };
}
