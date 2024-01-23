import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: Number,
    name: String,
    link: String,
    profile: String,
    comment: String,
    color: String
})


export default mongoose.models.Comment || mongoose.model("Comment", schema)