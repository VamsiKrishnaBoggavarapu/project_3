import express from "express";
import csurf from "csurf";
import processEnvConfig from "./app/config/processEnvConfig.js";
import {
  connectDB,
  reconnectDB,
  closeDBConnection,
} from "./app/database/index.js";
import cors from "./app/middleware/cors.js";
import { appRateLimit } from "./app/middleware/rateLimit.js";

const app = express();

processEnvConfig();

/* Middlewares */
app.use(express.json());
app.use(cors);
app.use(appRateLimit);
app.use(csurf());

app.get("/", (req, res) => {
  console.log(req.csrfToken());
  return res.send("Welcome");
});

app.listen(4000, async () => {
  console.log("start");
  await connectDB();
  reconnectDB();
  closeDBConnection();
});
