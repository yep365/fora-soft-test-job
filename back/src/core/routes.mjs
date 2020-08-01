import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import { RoomCntrl, UserCntrl } from "../controllers/index.mjs";

const createRoutes = (app, io) => {
  const RoomController = new RoomCntrl(io);
  const UserController = new UserCntrl(io);

  app.use(bodyParser.json());

  app.get("/room/:roomId", RoomController.getRoomInfo);
  app.post("/room", RoomController.createRoom);

  app.post("/user", UserController.indexUser);
};
export default createRoutes;
