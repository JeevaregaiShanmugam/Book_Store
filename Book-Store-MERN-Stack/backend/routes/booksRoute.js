import express from 'express';
import { Book } from '../models/bookModel.js'; // Import Book model created using mongoose

const router = express.Router();

// Route for saving a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    // Validate the required fields
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: 'Please provide all required fields: title, author, publishYear',
      });
    }

    const newBook = new Book({
      title,
      author,
      publishYear,
    });

    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({}); // Fetch all books from the database using mongoose
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get a book by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id); // Find a book by ID using mongoose

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to update a book by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    // Validate the required fields
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: 'Please provide all required fields: title, author, publishYear',
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear },
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id); // Delete the book by ID using mongoose

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
