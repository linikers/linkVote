import { Pool } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

const pool = new Pool({
  connectionString: process.env.DATABASE
});

const createTableIfNotExists = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS competidores (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        work VARCHAR(255) NOT NULL,
        votes INTEGER NOT NULL DEFAULT 0,
        percent DECIMAL(5, 2) DEFAULT 0,
        anatomy INTEGER DEFAULT 0,
        creativity INTEGER DEFAULT 0,
        pigmentation INTEGER DEFAULT 0,
        traces INTEGER DEFAULT 0,
        readability INTEGER DEFAULT 0,
        visualImpact INTEGER DEFAULT 0,
        totalScore INTEGER DEFAULT 0
      );
    `);
  } catch (error) {
    console.error('Erro ao criar a tabela competidores:', error);
  }
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  await createTableIfNotExists(); 
  if (request.method === 'POST') {
    const { name, work, votes } = request.body;
    
    try {
      const result = await pool.query(
        'INSERT INTO competidores(name, work, votes) VALUES($1, $2, $3) RETURNING *',
        [name, work, votes]
      );
      response.status(201).json(result.rows[0]);
    } catch (error) {
      response.status(500).json({ error: 'Erro ao cadastrar competidor' });
    }
  } else {
    response.setHeader("allow", ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
};
