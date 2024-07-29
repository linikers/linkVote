import { Pool } from "@vercel/postgres";

 const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
 });

 export default async (request, response) => {
  if(request.method == 'POST') {
    const { name, work, votes } = req.body;
    
    try {
      const result = await pool.query(
        'INSERT INTO competidore(name, work, votes) VALUES() RETURNING *',
        [name, work, votes]
      );
      response.status(201).json(result.rows[0])
    } catch (error) {
      response.status(500).json({ error: 'Erro ao cadastrar competidor'})
    }
  } else {
    // response
  }
 } 
// import { put } from '@vercel/blob';
// import dotenv from 'dotenv';

// dotenv.config();

// const blobServiceClient = {
//   token: process.env.BLOB_READ_WRITE_TOKEN,
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { key, value } = req.body;
//       const blob = await put(`competidores/${key}.json`, Buffer.from(JSON.stringify(value)), {
//         contentType: 'application/json',
//         access: 'public',
//         token: blobServiceClient.token,
//       });
//       res.status(200).json({ success: true, blob });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ success: false, error: 'Method Not Allowed' });
//   }
// }
