import express from "express";
import { put, list } from "@vercel/blob";
// import multer from "multer";


const app = express();
// const upload = multer({ dest: 'competidores/' })
const blobServiceClient = {
    token: process.env.BLOB_READ_WRITE_TOKEN,
};

app.use(express.json());

app.post('/api/save', async (request, response)=> {
    try {
        const { key, value } = request.body;
        const blob = await put(`data/${key}.json`, value, {
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

app.get('/api/get', async(request, response) => {
    try {
        
        const { key } = request.query;
        const blobs = await list({ prefix: `data/${key}.json` });
        if( blobs.blobs.length > 0 ) {
            const blob = blobs.blobs[0];
            const data = await fetch(blob.url).then(response => response.json())
            response.json(data);
        } else {
            response.status(404).json({ error: `Dados não encontrados`})
        }
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: error.message})
    }
})

app.listen(5000, () => {
    console.log("Server rocket running on port 5000")
})