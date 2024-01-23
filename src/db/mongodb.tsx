import mongoose from "mongoose";

export async function connectDb() {
    await mongoose.connect("mongodb+srv://daimer003:392513Molina*@comments.qur7yse.mongodb.net/?retryWrites=true&w=majority")
}