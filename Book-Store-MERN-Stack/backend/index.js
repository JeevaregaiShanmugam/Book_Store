import express from 'express';
import mongoose from 'mongoose'; // Import mongoose
import { PORT, mongoDBURL } from './config.js'; // Import the constants
import booksRoute from './routes/booksRoute.js'; // Import your route
import cors from 'cors';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS Configuration
app.use(cors({ origin: '*' }));

// Welcome Route
app.get('/', (req, res) => {
  return res.status(200).send('Welcome to the Book Store API');
});

// Use the books route
app.use('/books', booksRoute);

// Connect to MongoDB using Mongoose and start the server
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
