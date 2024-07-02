const express = require('express');
const app = express();

// app.use(express.json())
const { BlobServiceClient } = require('@vercel/blob')
const blobServiceClient = new BlobServiceClient({
    token: process.eventNames.	
    BLOB_READ_WRITE_TOKEN,
})
app.use(express.json())
app.post('/api/save', async (request, response)=> {
    const { key, value } = request.body;
    const blob = await blobServiceClient.createBlob(`data/${key}`, value);
    response.json({ success: true })
})
// app.post('/api/save', (request, response) => {
//     const {key, value} = request.body
//     tempDataBase[key] = value;
//     response.json({ success: true })
// })
app.get('/api/get', async(request, response) => {
    const { key } = request.query;
    const blob = await blobServiceClient.getBlob(`data/${key}`);
    if(blob) {
        const data = await blob.text();
        response.json(data)
    } else {
        response.status(404).json({ error: `Dados não encontrados`})
    }
})
// app.get('/api/get', (req, res) => {
//     const {key} = request.query
//     const value = tempDataBase[key];
//     if(value) {
//         response.json(value)
//     } else {
//         response.status(404).json({ error: `Dados não encontrados`})
//     }
// })
module.exports = app