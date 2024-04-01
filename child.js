import { createConnection } from "node:net";
import { IPC_PATH } from "./config.js";

createConnection({
  path: IPC_PATH,
}).on("data", (data) => {
  console.log(data.toString());
});
