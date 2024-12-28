import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Grid,
} from '@mui/material';
import LogoutButton from './LogoutButton';
import HomeIcon from '@mui/icons-material/Home';
import Carousel from 'react-material-ui-carousel';

const topSellingBooks = [
  {
    title: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    image: 'https://m.media-amazon.com/images/I/817+192hZyS._SY342_.jpg',
  },
  {
    title: '1984',
    description: 'A dystopian novel by George Orwell.',
    image: 'https://www.eourmart.com/cdn/shop/products/51FXP6S8wWS.jpg?v=1639834548',
  },
  {
    title: 'To Kill a Mockingbird',
    description: 'A novel by Harper Lee about justice and race.',
    image: 'https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_.jpg',
  },
  {
    title: 'Pride and Prejudice',
    description: 'A romantic novel by Jane Austen.',
    image: 'https://m.media-amazon.com/images/I/51j1kEl26TL._SY445_SX342_.jpg',
  },
  {
    title: 'The Catcher in the Rye',
    description: 'A coming-of-age story by J.D. Salinger.',
    image: 'https://m.media-amazon.com/images/I/418bOQWiRBL._SY445_SX342_.jpg',
  },
];

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The Book Store has an amazing collection! I always find what I need and more.',
  },
  {
    name: 'John Smith',
    feedback: 'A fantastic platform for book lovers. The top-selling books carousel is my favorite feature!',
  },
  {
    name: 'Emily Johnson',
    feedback: 'Easy to navigate and great recommendations. The Book Store is my go-to place!',
  },
];

const UserHomePage = ({ setRole }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#f5f5f5',color:'black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Home
          </Typography>
          <Button
            component={Link}
            to="/homes"
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: '#e3f2fd',
              color: 'black',
              mr: 2,
              '&:hover': { backgroundColor: '#BA4A00' },
            }}
          >
            View Books
          </Button>
          <LogoutButton setRole={setRole} />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333',marginTop:'2%' }}>
          Welcome, User!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
          Explore and enjoy our vast collection of books from various genres. From timeless
          classics to modern bestsellers, we have something for every reader.
        </Typography>

        {/* About Section */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            textAlign: 'center',
            backgroundColor: '#e3f2fd',
            mb: 4,
          }}
        >
          <Typography variant="h5" gutterBottom>
            About Our Book Store
          </Typography>
          <Typography variant="body1">
            At Book Store, we pride ourselves on being a one-stop destination for book enthusiasts.
            Whether you’re looking for classic literature, contemporary fiction, or niche genres,
            our carefully curated collection ensures there’s something for everyone.
          </Typography>
        </Paper>

        {/* Carousel */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
          Top Selling Books
        </Typography>
        <Carousel
          indicators={false}
          navButtonsAlwaysVisible
          sx={{ width: '80%', margin: '0 auto', mt: 2 }}
        >
          {topSellingBooks.map((book, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                sx={{ height: 300, width: 'auto', borderRadius: '4px' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>

        {/* Testimonials */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 6 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{ padding: 2, backgroundColor: '#fff3e0', textAlign: 'center' }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  - {testimonial.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          py: 2,
          backgroundColor: '#f5f5f5',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption">© 2024 Book Store. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default UserHomePage;
