import bodyParser from "body-parser";

import { RoomCntrl, MessageCntrl } from "../controllers/index.mjs";
import { addUserId, handle404, errorHandler } from "../middlewares/index.mjs";

const createRoutes = (app, io) => {
  const RoomController = new RoomCntrl(io);
  const MessageController = new MessageCntrl(io);

  app.use(bodyParser.json());
  app.use(addUserId);

  app.post("/room", RoomController.createRoom);

  app.post("/messages/:roomId", MessageController.index);
  app.post("/messages", MessageController.create);

  app.use(handle404);
  app.use(errorHandler);
};
export default createRoutes;
