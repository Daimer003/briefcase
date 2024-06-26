import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors';
import fetch from 'node-fetch';

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


const projectId = "55505365";
const accessToken = 'glpat-TKs6GQx3DYQnQ8CrsGFk';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware);
    const apiUrl = `https://gitlab.com/api/v4/projects/${projectId}/repository/commits`;
    try {

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': accessToken,
            },
        })

        const data = await response.json();
        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Fallo el servicio" });

    }
}