import { OpenAIStream, streamToResponse } from 'ai';
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Crea el cliente de OpenAI
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { messages } = req.body;

        if (!messages) {
            return res.status(400).json({ error: 'No messages provided' });
        }

        // Solicita una respuesta de OpenAI
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages,
            max_tokens: 300,
        });

        // Verifica si OpenAIStream está causando problemas
        if (!response) {
            return res.status(500).json({ error: 'OpenAI API response is undefined' });
        }

        // Convierte la respuesta en un flujo de datos compatible
        const stream = OpenAIStream(response as any); // Forzar el tipo a evitar conflictos

        return streamToResponse(stream, res);
    } catch (error) {
        console.error('Error en la API de OpenAI:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}