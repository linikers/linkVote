import { createPool } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
})
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if(request.method === ' GET') {
    try {
      const result = await pool.query('SELECT * FROM competidores');
      response.status(200).json(result.rows)
    } catch (error) {
      response.status(500).json({ error: 'Erro ao listar competidores'})
    }
  } else {
    response.setHeader("Permitido", ['GET']);
    response.status(405).end(`Method ${request.method} não permitido`)
  }
};