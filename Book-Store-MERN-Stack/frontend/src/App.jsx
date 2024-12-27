import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import AdminHomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import LoginPage from './pages/LoginPage';
import Homes from './pages/Homes';
import PaymentPage from './pages/PaymentPage';

const App = () => {
  const [role, setRole] = useState(localStorage.getItem('role') || null); // Persist role in localStorage

  const handleSetRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem('role', newRole);
  };

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage setRole={handleSetRole} />} />

      {/* Admin Routes */}
      {role === 'admin' && (
        <>
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/books" element={<Home setRole={handleSetRole} />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </>
      )}

      {/* User Routes */}
      {role === 'user' && (
        <>
          <Route path="/user" element={<UserHomePage setRole={handleSetRole} />} />
          <Route path="/homes" element={<Homes setRole={handleSetRole} />} />
          <Route path="/payment" element={<PaymentPage />} />
        </>
      )}

      {/* Redirect Unknown Paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
