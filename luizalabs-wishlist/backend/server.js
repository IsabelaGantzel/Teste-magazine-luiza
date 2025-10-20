import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());

app.get('/products', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./mock-products.json', 'utf8'));
  res.json(data);
});

app.listen(3001, () => {
  console.log('API rodando em http://localhost:3001');
});