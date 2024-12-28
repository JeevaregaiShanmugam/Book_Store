# Book Store MERN Stack Project

## Overview
The **Book Store Application** is a robust platform designed using the MERN stack (MongoDB, Express.js, React, Node.js). It offers CRUD (Create, Read, Update, Delete) functionalities for managing books. The project incorporates modern tools like Vite for fast development and Tailwind CSS for sleek styling.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Lessons Covered](#lessons-covered)
8. [Contributing](#contributing)
9. [License](#license)

---

## Getting Started
Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites
- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** for the database
- **Vite** and **Tailwind CSS** for the frontend setup

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/book-store-mern.git
cd book-store-mern
```

### Install Server Dependencies
Navigate to the backend directory and install the required dependencies:
```bash
cd backend
npm install
```

### Set Up MongoDB
1. Ensure MongoDB is running.
2. Create a `.env` file in the backend directory and add your MongoDB URI:
   ```env
   MONGO_URI=mongodb://localhost:27017/bookstore
   PORT=5000
   ```

### Start the Server
Run the backend server:
```bash
npm start
```
The server will run on `http://localhost:5000`.

### Install Client Dependencies
Navigate to the frontend directory and install the required dependencies:
```bash
cd ../frontend
npm install
```

### Start the Client
Run the frontend application:
```bash
npm run dev
```
The client will be accessible at `http://localhost:5173`.

---

## Features
- **Add Book**: Users can add new books to the collection.
- **View Books**: Displays all available books in a list.
- **View Book Details**: Shows detailed information for each book.
- **Edit Book**: Allows users to modify book details.
- **Delete Book**: Removes books from the collection.
- **User Experience Enhancements**: Includes notifications and confirmation alerts.

---

## Project Structure
```
Book-Store-MERN-Stack/
├── backend/                       # Backend codebase (Node.js + Express)
│   ├── models/                    # Mongoose models for database schema
│   │   └── bookModel.js           # Book schema
│   ├── routes/                    # Express routes for API endpoints
│   ├── config.js                  # MongoDB configuration setup
│   ├── index.js                   # Entry point of the server
│   ├── package.json               # Dependencies and scripts for the backend
│   └── package-lock.json          # Dependency tree for the backend
│
├── frontend/                      # Frontend codebase (React + Vite + Tailwind CSS)
│   ├── public/                    # Public assets for the frontend
│   ├── src/                       # Main source code directory
│   │   ├── assets/                # Static assets (e.g., images, icons)
│   │   ├── components/            # Reusable React components
│   │   │   ├── BookModal.jsx      # Modal for book-related actions
│   │   │   ├── BookSingleCard.jsx # Card component for individual books
│   │   │   ├── BooksCard.jsx      # Component displaying multiple books
│   │   │   ├── BooksTable.jsx     # Table for book management (admin view)
│   │   │   ├── UserBookCard.jsx   # Card component for user-specific books
│   │   │   ├── BackButton.jsx     # Navigation button component
│   │   │   └── Spinner.jsx        # Loading spinner component
│   │   ├── pages/                 # Page-level components
│   │   │   ├── Cart.jsx           # Cart functionality page
│   │   │   ├── CreateBooks.jsx    # Component for adding new books
│   │   │   ├── DeleteBook.jsx     # Component for deleting books
│   │   │   ├── EditBook.jsx       # Component for editing book details
│   │   │   ├── Home.jsx           # Admin home page with book list
│   │   │   ├── HomePage.jsx       # User homepage
│   │   │   ├── Homes.jsx          # Component managing user/admin routes
│   │   │   ├── LoginPage.jsx      # User login page
│   │   │   ├── LogoutButton.jsx   # Logout functionality
│   │   │   ├── PaymentPage.jsx    # Payment gateway integration
│   │   │   ├── ShowBook.jsx       # Component to view book details
│   │   │   └── UserHomePage.jsx   # Component for user-specific views
│   │   ├── App.jsx                # Main React application component
│   │   ├── index.css              # Global CSS styles
│   │   └── main.jsx               # React application entry point
│   ├── .eslintrc.cjs              # ESLint configuration
│   ├── index.html                 # Main HTML file
│   ├── package.json               # Dependencies and scripts for the frontend
│   ├── package-lock.json          # Dependency tree for the frontend
│   ├── postcss.config.js          # PostCSS configuration for Tailwind CSS
│   └── tailwind.config.js         # Tailwind CSS configuration
│
├── .gitignore                     # Git ignore file for the project
├── README.md                      # Project documentation
└── env.example                    # Example environment variables
```

---

## Usage
### Open the Client
Access the React app in your browser at `http://localhost:5173`.

### Features
1. **View Books List**: Browse all available books.
2. **Add New Book**: Click the "Add Book" button to include a new entry.
3. **Edit a Book**: Modify details of existing books.
4. **Delete a Book**: Remove unwanted books from the collection.

---

## Lessons Covered
- Node.js and Express setup
- MongoDB integration with Mongoose
- CRUD operations for books
- Structuring Express routes
- CORS policy setup
- React integration with Vite and Tailwind CSS
- React Router for SPA
- Reusable components for enhanced maintainability
- UX improvements with modals and alerts

---

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for review.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

