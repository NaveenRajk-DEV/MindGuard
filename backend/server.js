import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import exploreRouter from './routes/exploreRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
const startServer = async () => {
  await connectDB();

  // ✅ Mount routers
  app.use('/api/auth', userRouter);
  app.use('/api/explore', exploreRouter);

  app.get('/', (req, res) => res.send('API Working'));

  // ✅ Start Server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
