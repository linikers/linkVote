import express from 'express';
import { list } from '@vercel/blob';

const router = express.Router();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

router.get('/', async (req, res) => {
  try {
    const response = await list({ token: blobServiceClient.token });
    res.status(200).json(response.blobs);
  } catch (error) {
    console.error('Error fetching blobs:', error);
    res.status(500).json({ error: 'Failed to fetch blobs' });
  }
});

export default router;


// import express from 'express';
// import { list, get } from '@vercel/blob';

// const router = express.Router();

// const blobServiceClient = {
//   token: process.env.BLOB_READ_WRITE_TOKEN,
// };

// export default async function handlerList(

// ) {
//   const blob = await put('/')
// }