import mongoose from "mongoose";

//const developer = "mongodb://localhost:27017/"
const user = process.env.NEXT_PUBLIC_OPENAI_USER
const pass = process.env.NEXT_PUBLIC_OPENAI_PASS

export async function connectDb() {
    await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.vffoffq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

