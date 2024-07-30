import { Pool } from "@vercel/postgres";
// import { response } from "express";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})
export default async (request, response) => {
  if(request.method === ' GET') {
    try {
      const result = await pool.query('SELECT * FROM competidores');
      response.status(200).json(result.rows)
    } catch (error) {
      response.status(500).json({ error: 'Erro ao listar competidores'})
    }
  } else {
    response.setHeader("allow", ['GET']);
    response.status(405).end(`Method ${request.method} not allowed`)
  }
};