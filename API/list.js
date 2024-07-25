import express from 'express';
import { list } from '@vercel/blob';

const router = express.Router();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

router.get('/competidores', async (req, res) => {
  try {
    const response = await list({ 
     token: blobServiceClient.token,
     containerName: 'competidores',
     });
     
    res.status(200).json(response.blobs);
  } catch (error) {
    console.error('Error fetching blobs:', error);
    res.status(500).json({ error: 'Falha no fetch dos blobs' });
  }
});

export default router;