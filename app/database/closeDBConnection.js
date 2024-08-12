import mongoose from "mongoose";

const closeDBConnection = () => {
  process.on("SIGINT", () => {
    console.log("DB connection close");
    mongoose.connection.close(true);
    process.exit(0);
  });
};

export default closeDBConnection;
