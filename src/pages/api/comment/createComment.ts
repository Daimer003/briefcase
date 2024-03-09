import { connectDb } from '@/db/mongodb'
import Comments from '@/models/comments'
import { NextApiRequest, NextApiResponse } from 'next'
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
                return reject(result)
            }
            return resolve(result)
        });
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await runMiddleware(req, res, corsMiddleware)
    const comment = await req.body

    try {
        await connectDb()
        const comments = await Comments.create(comment)
        res.status(200).json(comments)
    } catch (error) {
        console.log(error)
    }
}