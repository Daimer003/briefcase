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


const projectId = "8bffbf988805cbae81c10f80feeb61ce2241e10c";
const accessToken = 'glpat-66gnMVh1V78iAU3RPwfj';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware);
    const apiUrl = `https://gitlab.com/api/v4/projects/`;
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