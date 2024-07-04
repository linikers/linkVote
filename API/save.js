import { put, list } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { key, value } = req.body;
      await put(`competidores/${key}.json`, Buffer.from(JSON.stringify(value)), {
        contentType: 'application/json',
        access: 'public',
        token: blobServiceClient.token,
      });

      const blobs = await list({ prefix: 'competidores/', token: blobServiceClient.token });
      const users = await Promise.all(
        blobs.blobs.map(async (blob) => {
          const response = await fetch(blob.url);
          return response.json();
        })
      );

      res.status(200).json(users.flat());
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
