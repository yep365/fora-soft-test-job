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
      const message = req.body.message;

      UserModel.findOne({ name: userName }, (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (user === null) {
          const newUser = new UserModel({ name: userName });

          newUser.save().then((user) => {
            const newMessage = new MessageModel({
              user: user._id,
              text: message,
            });

            newMessage.save().then((message) => {
              const postData = { users: user._id, messages: message._id };

              const newRoom = new RoomModel(postData);
              newRoom.save().then((roomObj) => {
                return res.status(200).json({
                  status: "success",
                  roomId: roomObj._id,
                });
              });
            });
          });
        } else {
          const newMessage = new MessageModel({
            user: user._id,
            text: message,
          });
          newMessage.save().then((message) => {
            const postData = { users: user._id, messages: message._id };

            const newRoom = new RoomModel(postData);
            newRoom.save().then((roomObj) => {
              return res.status(200).json({
                status: "success",
                roomId: roomObj._id,
              });
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
