import bodyParser from "body-parser";

import { RoomCntrl, UserCntrl, MessageCntrl } from "../controllers/index.mjs";

const createRoutes = (app, io) => {
  const RoomController = new RoomCntrl(io);
  const UserController = new UserCntrl(io);
  const MessageController = new MessageCntrl(io);

  app.use(bodyParser.json());

  app.post("/room", RoomController.createRoom);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);

  app.post("/user", UserController.indexUser);
};
export default createRoutes;
