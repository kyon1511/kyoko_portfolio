import express from 'express';
import { PrismaClient } from '@prisma/client';
import workRoutes from "./routes/work";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/api/work", workRoutes);

app.get('/profiles', async (req, res) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

export default app;

