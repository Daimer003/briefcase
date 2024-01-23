import { connectDb } from '@/db/mongodb';
import Comments from '@/models/comments';
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';


const corsMiddleware = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
});

async function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { messages } = await req.body;
    await runMiddleware(req, res, corsMiddleware);
    // Ask OpenAI for a streaming chat completion given the prompt
    try {
        await connectDb()

        const comments = await Comments.find()
        console.log(comments)
        return comments
    } catch (error) {
        console.log(error)
    }
}