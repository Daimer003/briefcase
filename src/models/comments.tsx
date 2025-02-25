import { Schema, model, models, Document } from 'mongoose';

export interface IComment extends Document {
    id?: number;
    link?: string;
    comment: string;
    name: string;
    profile?: string;
    color?: string;
    huella?: string;
    avatar?: string;
}

const CommentSchema = new Schema<IComment>(
    {
        id: Number,
        link: String,
        comment: { type: String, required: true },
        name: { type: String, required: true },
        profile: String,
        color: String,
        huella: String,
        avatar: String,
    },
    { timestamps: true }
);

const Comments = models.Comments || model<IComment>('Comments', CommentSchema);

export default Comments;