import mongoose from "mongoose";

const developer = "mongodb://localhost:27017/";
const url = process.env.NEXT_PUBLIC_URL_MONGODB;

export async function connectDb() {
  await mongoose.connect(String(url));
}
