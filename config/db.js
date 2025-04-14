import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI = "mongodb+srv://anurag211824:P69Ep4yfE00X0tJ3@cluster0.mort0tu.mongodb.net/express";

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
    process.exit(1); // Optional: Exit the app if DB connection fails
  }  
};
