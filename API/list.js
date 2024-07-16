import { list, get } from '@vercel/blob';
import dotenv from 'dotenv';
import { PutBlobResult } from "@vercel/blob";

dotenv.config();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handler(req, res) {
  try {
    const { prefix = '' } = req.query;

    const blobs = await list({ prefix: `competidores/${prefix}`, token: blobServiceClient.token });

    const blobContents = blobs.keys.map(async (key) => {
      const blob = await get({ key, token: blobServiceClient.token });
      const content = await blob.text();
      return { key, content };
    });

    const dataWithContent = await Promise.all(blobContents);
    res.status(200).json({ blobs: dataWithContent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
