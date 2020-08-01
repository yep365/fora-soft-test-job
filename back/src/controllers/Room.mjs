import express from "express";
import socket from "socket.io";

import { UserModel, RoomModel, MessageModel } from "../models/index.mjs";

export default class RoomController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    // const roomId = req.params.roomId;
    // if (roomsDB[roomId] === "undefined") {
    //   return res
    //     .status(404)
    //     .json({ status: "error", message: "Room not found" });
    // }
    // return res
    //   .status(200)
    //   .json({ status: "success", message: roomsDB[roomId] });
  };
  getRoomInfo = (req, res) => {
    try {
      const room = req.params.room;

      RoomModel.findOne({ room: room })
        .populate(["users", "messages"])
        .exec((err, room) => {
          if (err) {
            return res.status(500).json({
              status: "error",
              message: err,
            });
          }
          if (room === null) {
            return res.status(404).json({
              status: "error",
              message: "Room not found",
            });
          }
          return res.json(room);
        });
    } catch (e) {
      return res.status(500).json({ status: "error", message: e });
    }
  };
  createRoom = (req, res) => {
    try {
      const userName = req.body.user;

      UserModel.findOne({ name: userName }, (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (user === null) {
          const newUser = new UserModel({ name: userName });

          newUser
            .save()
            .then((userObj) => {
              const postData = { users: userObj._id };

              const newRoom = new RoomModel(postData);
              newRoom.save().then((roomObj) => {
                return res.status(200).json({
                  status: "success",
                  roomId: roomObj._id,
                  userId: userObj._id,
                });
              });
            })
            .catch(() => {
              res.sendStatus(500);
            });
        } else {
          const postData = { users: user._id };

          const newRoom = new RoomModel(postData);
          newRoom.save().then((roomObj) => {
            return res.status(200).json({
              status: "success",
              roomId: roomObj._id,
              userId: user._id,
            });
          });
        }
      });

      // res.status(200).json({ status: "success", message: roomsDB[newRoom] });
      // this.io.emit("SERVER:ROOM_CREATED", {
      //   dialog: newRoom,
      // });
    } catch (e) {
      res.json({ status: "error", message: e });
    }
  };
}
