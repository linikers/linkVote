import { put, get } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { key, value } = req.body;
      
      // Fetch existing data
      const existingBlob = await get(`competidores/${key}.json`, { token: blobServiceClient.token });
      const existingData = existingBlob ? JSON.parse(await existingBlob.text()) : [];

      // Merge existing data with new data
      const updatedData = [...existingData, ...value];

      // Save merged data
      await put(`competidores/${key}.json`, Buffer.from(JSON.stringify(updatedData)), {
        contentType: 'application/json',
        access: 'public',
        token: blobServiceClient.token,
      });

      res.status(200).json(updatedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
