import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors';
import fetch from 'node-fetch';

//Url de github
const url = process.env.NEXT_PUBLIC_URL_GITHUB as string
const token = process.env.NEXT_PUBLIC_TOKEN_GITHUB as string


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
    res: NextApiResponse
) {
   
    const { projects  } = await req.body;
    console.log("QUI ESTA EL PARAMETRO BODY", projects)
    try {
        await runMiddleware(req, res, corsMiddleware);
    

        const response = await fetch(`${url}/repos/Daimer003/${projects}/commits`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Fallo el servicio para obtener los commits" });

    }
}