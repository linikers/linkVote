import { Blob } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { key, value } = req.body;

    try {
      const blob = new Blob(process.env.BLOB_READ_WRITE_TOKEN);
      await blob.put(`competidores/${key}.json`, JSON.stringify(value));

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Erro ao salvar os dados' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Método não permitido' });
  }
}
