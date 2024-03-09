import mongoose from "mongoose";

export async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017/")
}

// mongodb+srv://daimer003:392513Molina*@comments.qur7yse.mongodb.net/?retryWrites=true&w=majority