// list.js (ou handler.js)
// import { list, get } from '@vercel/blob';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const blobServiceClient = {
  token: process.env.BLOB_READ_WRITE_TOKEN,
};


