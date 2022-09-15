import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Database connected...");
  });
};
