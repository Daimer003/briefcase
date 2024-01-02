import { OpenAIStream, streamToResponse } from 'ai';
import { NextApiRequest, NextApiResponse } from 'next';
// import Cors from 'cors';
import OpenAI from 'openai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
});

// const corsMiddleware = Cors({
//     methods: ['GET', 'POST', 'OPTIONS'],
// });

// async function runMiddleware(
//     req: NextApiRequest,
//     res: NextApiResponse,
//     fn: Function
// ) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result: any) => {
//             if (result instanceof Error) {
//                 return reject(result);
//             }
//             return resolve(result);
//         });
//     });
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { messages } = await req.body;
    // await runMiddleware(req, res, corsMiddleware);
    // Ask OpenAI for a streaming chat completion given the prompt
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages,
            max_tokens: 100,
        });

        // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response);

        /**
         * Converts the stream to a Node.js Response-like object.
         * Please note that this sends the response as one message once it's done.
         */
        return streamToResponse(stream, res);
    } catch (error) {
        console.log(error)
    }
}