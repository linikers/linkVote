import express from 'express';
import { list, get } from '@vercel/blob';

const router = express.Router();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

router.get('/', async (req, res) => {
  try {
    const { prefix = 'competidores/' } = req.query;

    if (!blobServiceClient.token) {
      throw new Error('Token de acesso não configurado corretamente.');
    }

    const blobs = await list({ prefix: `${prefix}`, token: blobServiceClient.token });
    console.log(blobs);
    const blobContents = await Promise.all(
      blobs.keys.map(async (key) => {
        try {
          const blob = await get({ key, token: blobServiceClient.token });
          console.log(blob);
          const content = await blob.text();
          console.log(content);
          const jsonContent = JSON.parse(content); // Parse do conteúdo do blob

          const {
            name,
            work,
            votes,
            percent,
            anatomy,
            creativity,
            pigmentation,
            traces,
            readability,
            visualImpact,
            totalScore,
          } = jsonContent; // Extrair dados do JSON

          return {
            name,
            work,
            votes,
            percent,
            anatomy,
            creativity,
            pigmentation,
            traces,
            readability,
            visualImpact,
            totalScore,
          };
        } catch (error) {
          console.error('Erro ao processar blob:', error);
          throw new Error('Erro ao ler conteúdo do blob.');
        }
      })
    );

    res.status(200).json(blobContents);
  } catch (error) {
    console.error('Erro ao listar blobs:', error);
    res.status(500).json({ error: 'Erro interno ao processar a requisição.' });
  }
});

export default router;
