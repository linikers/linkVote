import { Blob } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blob = new Blob(process.env.BLOB_READ_WRITE_TOKEN);
      const data = await blob.get('competidores/votes.json');

      if (data) {
        res.status(200).json(JSON.parse(data.toString()));
      } else {
        res.status(404).json({ success: false, error: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
