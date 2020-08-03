import express from "express";
import socket from "socket.io";
import validationResult from "express-validator";

import { UserModel } from "../models/index.mjs";

export default class UserCntrl {
  constructor(io) {
    this.io = io;
  }

  indexUser = (req, res) => {
    try {
      const name = req.body.name;
      UserModel.findOne({ name: name }, (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (user === null) {
          const newUser = new UserModel({ name });
          newUser.save().then((obj) => {
            return res.status(200).json(obj);
          });
        } else {
          console.log(user);
          return res.status(200).json(user);
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
