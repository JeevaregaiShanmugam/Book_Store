#Book Store MERN Stack Project
This is a simple Book Store application built using the MERN stack (MongoDB, Express.js, React, Node.js) with additional tools like Vite and Tailwind CSS for front-end development. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

#Table of Contents
Getting Started
Prerequisites
Installation
Features
Project Structure
Usage
Lessons Covered
Contributing
License
Getting Started
These instructions will help you set up the project locally for development and testing purposes.

#Prerequisites
Node.js and npm (Node Package Manager)
MongoDB for the database
Vite and Tailwind CSS (for front-end setup)
#Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/book-store-mern.git
cd book-store-mern
2. Install Server Dependencies
Navigate to the server directory and install the required dependencies:

bash
Copy code
cd server
npm install
3. Set Up MongoDB
Make sure MongoDB is running.
Create a .env file in the server directory and add your MongoDB URI:
plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/bookstore
PORT=5000
4. Start the Server
bash
Copy code
npm start
The server should now be running on http://localhost:5000.

5. Install Client Dependencies
Navigate to the client directory and install the required dependencies:

bash
Copy code
cd ../client
npm install
6. Start the Client
bash
Copy code
npm run dev
The client should now be running on http://localhost:5173.

#Features
Add Book: Allows users to add new books to the collection.
View Books: Displays a list of all available books.
View Book Details: Shows detailed information for each book.
Edit Book: Allows users to edit book details.
Delete Book: Removes a book from the collection.
User Experience Enhancements: Beautiful alerts for confirmation and notifications.

#Project Structure
Book-Store-MERN-Stack/
├── backend/                # Backend codebase (Node.js + Express)
│   ├── models/             # Mongoose models for database schema
│   │   └── bookModel.js    # Book schema (Model name corrected in the latest commit)
│   ├── routes/             # Express routes for API endpoints
│   │   └── booksRoute.js   # Routes for book-related CRUD operations
│   ├── config.js           # MongoDB configuration setup
│   ├── index.js            # Entry point of the server (Express app)
│   ├── package.json        # Dependencies and scripts for the backend
│   └── package-lock.json   # Exact dependency tree for the backend
│
├── frontend/               # Frontend codebase (React + Vite + Tailwind CSS)
│   ├── public/             # Public assets for the frontend
│   ├── src/                # Main source code directory
│   │   ├── assets/         # Static assets (e.g., images, icons)
│   │   ├── components/     # Reusable React components
│   │   │   ├── BackButton.jsx  # Button component for navigation
│   │   │   └── Spinner.jsx     # Spinner component (added in Lesson 14)
│   │   ├── pages/          # Page-level components
│   │   │   ├── CreateBooks.jsx  # Component for adding a new book (Lesson 22)
│   │   │   ├── DeleteBook.jsx   # Component for deleting a book (Lesson 22)
│   │   │   ├── EditBook.jsx     # Component for editing book details (Lesson 22)
│   │   │   ├── Home.jsx         # Home page with list of books (Lesson 19)
│   │   │   └── ShowBook.jsx     # Component to view book details (Lesson 15)
│   │   ├── App.jsx          # Main React application component
│   │   ├── index.css        # Global CSS styles (Tailwind CSS integrated)
│   │   └── main.jsx         # React application entry point (latest comment added)
│   ├── .eslintrc.cjs        # ESLint configuration
│   ├── index.html           # Main HTML file
│   ├── package.json         # Dependencies and scripts for the frontend
│   ├── package-lock.json    # Exact dependency tree for the frontend
│   ├── postcss.config.js    # PostCSS configuration for Tailwind CSS
│   └── tailwind.config.js   # Tailwind CSS configuration
│
├── .gitignore              # Git ignore file for the whole project
├── README.md               # Project documentation
└── env.example             # Example environment variables (e.g., MONGO_URI)


#Usage
1.Open the Client: Access the React app in your browser at http://localhost:5173.
2.View Books List: A list of books is displayed with an option to view details, edit, or delete.
3.Add New Book: Click the "Add Book" button, fill in the details, and save.
4.Edit a Book: Click on a book's edit button, update details, and save changes.
5.Delete a Book: Click the delete button for any book you wish to remove.

#Lessons Covered
1.Node.js and Express Setup
2.MongoDB Integration with Mongoose
3.CRUD Operations for Books
4.Express Router to structure routes
5.CORS Policy setup
6.React Setup with Vite and Tailwind CSS
7.SPA using React Router
8.Book Card Components for reusability
9.Modals and UX Improvements with Alerts
