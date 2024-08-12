import mongoose from "mongoose";
import connectDB from "./connectDB.js";

const reconnectDB = () => {
  mongoose.connection.on("disconnected", async () => {
    console.log("DB disconnected. Attempting to reconnection");
    await connectDB();
  });
};

export default reconnectDB;
