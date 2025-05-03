import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';              // Handles /signup and /login
import authRoutes from './routes/authRoutes.js';              // ✅ NEW: Handles /api/user (get/update)
import conversationRoutes from './routes/conversationRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import exerciseStatusRoutes from './routes/exerciseStatus.js';
import progressRoutes from './routes/progress.js';
import statusRoutes from './routes/statusRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Routes
app.use('/api/auth', userRouter);                             // /signup, /login
app.use('/api/user', authRoutes);                             // ✅ New: /api/user (GET, PUT)
app.use('/api/conversations', conversationRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/exercise-status', exerciseStatusRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/status', statusRoutes);                         // Includes /suggestions/complete

// Test route
app.get('/', (req, res) => res.send("API Working"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
