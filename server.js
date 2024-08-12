import express from "express";
import processEnvConfig from "./app/config/processEnvConfig.js";
import {
  connectDB,
  reconnectDB,
  closeDBConnection,
} from "./app/database/index.js";

const app = express();
processEnvConfig();
app.get("/", (req, res) => res.send("Welcome"));

app.listen(4000, async () => {
  console.log("start");
  await connectDB();
  reconnectDB();
  closeDBConnection();
});
