import { connectDb } from '@/db/mongodb';
import Comments, { IComment } from '@/models/comments';
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Configurar CORS
const corsMiddleware = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
});

// Middleware para ejecutar CORS
async function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware);

    try {
        await connectDb();

        // Forzar el método find a "any" y luego castear el resultado
        const comments = (await (Comments as any).find({}).lean().exec()) as IComment[];

        return res.status(200).json(comments);
    } catch (error) {
        console.error('❌ Error fetching comments:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}