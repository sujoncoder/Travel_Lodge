import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URI);
    if (DB) {
      console.log("Database Connect Successful.😎");
    }
  } catch (error) {
    console.log("Database Connection Failed ⚠", error.message);
  }
};
export default connectDB;
