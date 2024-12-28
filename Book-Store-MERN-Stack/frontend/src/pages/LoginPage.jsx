import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
  Divider,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const LoginPage = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic form validation: check if both fields are filled
    if (!username || !password) {
      setError('Both username and password are required!');
      return; // Stop further execution
    }

    // Dummy login logic for Admin
    if (username === 'admin' && password === 'admin123') {
      setRole('admin');
      navigate('/admin'); // Redirect to Admin dashboard
    } 
    // Basic login logic for User (any username and password allowed)
    else if (username && password) {
      setRole('user');
      navigate('/user'); // Redirect to User homepage
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?books,library,cozy)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'darken',
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
            background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
            <LibraryBooksIcon color="primary" sx={{ fontSize: 50, mr: 1 }} />
            <Typography variant="h4" component="h1" color="textPrimary">
              Bookstore Login
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }}>
            <BookmarkIcon color="secondary" />
          </Divider>

          {/* Display error message if there's an error */}
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: '#fff',
                borderRadius: 5,
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: '#fff',
                borderRadius: 5,
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              background: 'linear-gradient(to right, #3f51b5, #5a55ca)',
              '&:hover': {
                background: 'linear-gradient(to right, #5a55ca, #3f51b5)',
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            Explore our world of books and knowledge!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
