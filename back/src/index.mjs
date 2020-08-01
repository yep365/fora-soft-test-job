import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";

import "./core/socket.mjs";
import { createRoutes, createSocket } from "./core/index.mjs";

dotenv.config();

const app = express();
const http = createServer(app);
const io = createSocket(http);

app.use(cors());
createRoutes(app, io);

const PORT = process.env.PORT || 3003;

http.listen(PORT, function () {
  console.log(`Server: http://localhost:${PORT}`);
});
