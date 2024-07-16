import { BlobServiceClient } from "@azure/storage-blob";
// import { list } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  const response = await fetch('https://api.vercel.com/v8/blobs', {
      headers: {
          Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`
      }
  });

  if (!response.ok) {
      res.status(response.status).json({ message: response.statusText });
      return;
  }

  const data = await response.json();
  const blobs = data.blobs.filter(blob => blob.pathname.startsWith('competidores/users-'));
  res.status(200).json({ blobs });
}
