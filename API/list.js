import { list, get } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  try {
    const { prefix = 'competidores/' } = req.query;

    const blobs = await list({ 
      prefix, 
      token: blobServiceClient.token 
    });

    const blobContents = await Promise.all(
      blobs.keys.map(async (key) => {
        const blob = await get({ key, token: blobServiceClient.token });
        const content = await blob.text();
        return JSON.parse(content);
      })
    );

    res.status(200).json(blobContents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
