import express from "express";
import { Blob } from "@vercel/blob";
import multer from "multer";


// const express = require('express');
const app = express();
const upload = multer({ dest: 'uploads/' });


// app.use(express.json())
// const { BlobServiceClient } = require('@vercel/blob')
const blobServiceClient = new BlobServiceClient({
    token: process.eventNames.	
    BLOB_READ_WRITE_TOKEN,
})
app.use(express.json())
app.post('/api/save', async (request, response)=> {
    const { key, value } = request.body;
    const blob = await blobServiceClient.createBlob(`data/${key}.json`, value);
    response.json({ success: true, blob })
})

app.get('/api/get', async(request, response) => {
    const { key } = request.query;
    const blob = await blobServiceClient.getBlob(`data/${key}.json`);
    if(blob) {
        const data = await blob.text();
        response.json(JSON.parse(data))
    } else {
        response.status(404).json({ error: `Dados não encontrados`})
    }
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})