import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/profiles', async (req, res) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

