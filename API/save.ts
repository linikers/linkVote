import { Pool } from "@vercel/postgres";

 const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
 });

 export default async (request, response) => {
  if(request.method == 'POST') {
    const { name, work, votes } = request.body;
    
    try {
      const result = await pool.query(
        'INSERT INTO competidore(name, work, votes) VALUES($1, $2, $3) RETURNING *',
        [name, work, votes]
      );
      response.status(201).json(result.rows[0])
    } catch (error) {
      response.status(500).json({ error: 'Erro ao cadastrar competidor'})
    }
  } else {
    response.setHeader("allow", ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`)
  }
 };