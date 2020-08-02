import express from "express";
import socket from "socket.io";

import { UserModel, RoomModel, MessageModel } from "../models/index.mjs";

export default class MessageController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    try {
      const roomId = req.body.roomId;
      MessageModel.find({ room: roomId }, "text user -_id")
        .populate("user", "name -_id")
        .exec(function (err, messages) {
          if (err) {
            return res.status(404).json({
              status: "error",
              message: "Messages not found",
            });
          }
          return res.json(messages);
        });
    } catch (e) {
      return res.status(500).json({ status: "error", message: e });
    }
  };
  create = (req, res) => {
    try {
      const postData = {
        text: req.body.text,
        room: req.body.roomId,
        user: req.body.userId,
      };

      const message = new MessageModel(postData);
      message

        .save()
        .then(() => {
          res.sendStatus(204);
        })
        .catch(() => {
          console.log(`object`);
          res.sendStatus(500);
        });
    } catch (e) {
      console.log(`AAAAAAAAAAA`);
      return res.status(500).json({ status: "error", message: e });
    }
  };
}
