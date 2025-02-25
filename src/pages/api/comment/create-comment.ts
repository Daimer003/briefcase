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
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        await connectDb();

        const commentData = req.body;

        if (!commentData || typeof commentData !== 'object') {
            return res.status(400).json({ error: 'Invalid comment data' });
        }

        // Verifica que el comentario tenga la estructura correcta antes de insertarlo
        const newComment = new Comments(commentData);
        const savedComment = await newComment.save();

        return res.status(200).json(savedComment);
    } catch (error) {
        console.error('Error al guardar el comentario:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}