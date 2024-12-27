import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String, // URL or path to the book image
      required: false, // Optional field, depending on your needs
    },
    price: {
      type: Number, // Price in decimal format (e.g., 19.99)
      required: true,
      min: 0, // Ensure price is a positive number
    },
  },
  {
    timestamps: true,
    collection: 'books-collection', // Custom collection name
  }
);

export const Book = mongoose.model('Book', bookSchema);
