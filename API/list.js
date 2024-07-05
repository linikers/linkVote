import { list } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  try {
    const { prefix = '' } = req.query;
    const blobs = await list({ 
        prefix: `competidores/${prefix}`, 
        token: blobServiceClient.token 
    });
    console.log("Lista de blobs retornada:", blobs.blobs);
    const blobContents = await Promise.all(
        blobs.keys.map(async (key) => {
          const blob = await get({ key, token: blobServiceClient.token });
          const content = await blob.text();
          return { key, content };
        })
      );
      
    res.status(200).json({ blobs: blobs.blobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
