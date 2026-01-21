import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: './config.env' });
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Server is working!');
});

export default app;
