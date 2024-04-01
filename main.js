import { createServer } from "node:net";
import { IPC_PATH } from "./config.js";

createServer((socket) => {
  socket.write("hello");
  setTimeout(() => {
    socket.end("world");
  }, 3000);
}).listen(IPC_PATH);
