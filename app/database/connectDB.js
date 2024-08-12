import mongoose from "mongoose";

let connectionAttempts = 0;
const maxConnectionAttempts = 3;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected");
  } catch (err) {
    if (connectionAttempts < maxConnectionAttempts) {
      console.log(`DB connection failed - retry - ${connectionAttempts}`);
      connectionAttempts++;
      await connectDB();
    } else {
      console.log("DB connection failed - after retried 3 attempts");
      process.exit(1);
    }
  }
};

export default connectDB;
