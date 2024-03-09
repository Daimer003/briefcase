import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: Number,
    name: String,
    link: String,
    profile: String,
    comment: String,
    color: String
})


export default mongoose.models.Comments || mongoose.model("Comments", schema)