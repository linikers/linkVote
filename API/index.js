import express from "express";
import { Blob } from "@vercel/blob";
import multer from "multer";


const app = express();
const upload = multer({ dest: 'competidores/' });
const blobServiceClient = new BlobServiceClient({
    token: process.env.BLOB_READ_WRITE_TOKEN,
})
app.use(express.json());

app.post('/api/save', async (request, response)=> {
    try {
        const { key, value } = request.body;
        const blob = await blobServiceClient.createBlob(`data/${key}.json`, value {
            contentType: 'application/json',
        });
        response.json({ success: true, blob })
    } catch (error) {
        console.error(error);
        response.status(500).json({ success: false, error: error.message })
    }

})

app.get('/api/get', async(request, response) => {
    try {
        
        const { key } = request.query;
        const blob = await blobServiceClient.getBlob(`data/${key}.json`);
        if(blob) {
            const data = await blob.text();
            response.json(JSON.parse(data))
        } else {
            response.status(404).json({ error: `Dados não encontrados`})
        }
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: error.message})
    }
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})