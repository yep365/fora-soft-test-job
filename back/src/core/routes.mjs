import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import { RoomCntrl } from "../controllers/index.mjs";

const createRoutes = (app, io) => {
  const RoomController = new RoomCntrl(io);

  app.use(bodyParser.json());

  app.get("/room/:roomId", RoomController.index);
  app.post("/room", RoomController.createRoom);
};
export default createRoutes;
