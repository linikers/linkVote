import express from "express";
import { put, list } from "@vercel/blob";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config()
console.log('BLOB_READ_WRITE_TOKEN:', process.env.BLOB_READ_WRITE_TOKEN);
const app = express();

const blobServiceClient = {
    token: process.env.BLOB_READ_WRITE_TOKEN,
};

app.use(express.json());
app.use(cors())

app.post('/api/index', async (request, response)=> {
    try {
        const { key, value } = request.body;
        const blob = await put(`competidores/${key}.json`, Buffer.from(JSON.stringify(value)), {
            contentType: 'application/json',
            access: 'public',
            token: blobServiceClient.token
        });
        response.json({ success: true, blob });
    } catch (error) {
        console.error(error);
        response.status(500).json({ success: false, error: error.message })
    }

})

app.get('/api/index', async (request, response) => {
    try {
      const { prefix = '' } = request.query; // Defina o prefixo padrão (opcional)
      const blobs = await list({ prefix: `competidores/${prefix}`, token: blobServiceClient.token });
      response.json({ blobs: blobs.blobs }); // Retorna a lista de blobs
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  });
export default app;

// No deploy do Vercel, a porta é definida pela plataforma
// app.listen(5000, () => {
//     console.log("Server rocket running on port 5000")
// })