import { put } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }

  const { key, value } = req.body;
  const response = await fetch(`https://api.vercel.com/v8/blobs/${key}`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
  });

  if (!response.ok) {
      res.status(response.status).json({ message: response.statusText });
      return;
  }

  res.status(200).json({ message: 'Data saved successfully' });
}
