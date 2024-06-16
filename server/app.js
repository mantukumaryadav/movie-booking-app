import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-router.js';
import adminRouter from './routes/admin-router.js';
import movieRouter from './routes/movie-router.js';
import bookingsRouter from './routes/booking-router.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/movie', movieRouter);
app.use('/booking', bookingsRouter);

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/movie-booking'; 

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Connected to Database and Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => console.log('Error connecting to MongoDB:', error));
