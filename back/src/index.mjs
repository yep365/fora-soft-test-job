import express from "express";
import { createServer } from "http";
import cors from "cors";
import io from "socket.io";

import routes from "./core/routes.mjs";

const app = express();
const http = createServer(app);

app.use(cors());
routes(app, io);

const PORT = process.env.PORT || 3003;

http.listen(PORT, function () {
  console.log(`Server: http://localhost:${PORT}`);
});
