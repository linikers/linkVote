import express from 'express';
import { list, get } from '@vercel/blob';

const router = express.Router();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};

export default async function handlerList(
  request: req,
  response: resp,
) {
  const blob = await put('/')
}