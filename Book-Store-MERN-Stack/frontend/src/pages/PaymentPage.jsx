import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Button, Typography, Box, Paper, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ReactConfetti from 'react-confetti';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [] } = location.state || {}; // Safely retrieve the cart from state
  const [openDialog, setOpenDialog] = useState(false); // To handle dialog visibility
  const [showConfetti, setShowConfetti] = useState(false); // To trigger confetti animation

  const qrValue = JSON.stringify(cart); // Prepare data for the QR code

  // Handle screen resizing
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Update window size on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePaymentSubmit = () => {
    // Simulate payment success
    setShowConfetti(true); // Show confetti
    setOpenDialog(true); // Show the congratulations dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    navigate('/user'); // Navigate to the user homepage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      {showConfetti && (
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
        />
      )}
      <Paper elevation={3} sx={{ width: '100%', maxWidth: '600px', padding: '24px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Payment
        </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Please review your order before submitting payment.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="left" fontWeight="bold">
              Your Order:
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between mb-4">
                  <div>
                    <Typography variant="body1" fontWeight="medium">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Author: {item.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </div>
                  <Typography variant="body1" fontWeight="medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" align="left" fontWeight="bold">
              Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </Typography>
          </Grid>

          <Grid item xs={12} className="text-center">
            <Box display="flex" justifyContent="center" alignItems="center" my={4}>
              <QRCode value={qrValue} size={200} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#1976d2', // Darker blue on hover
                },
              }}
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Dialog Box with Congratulations */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            You've successfully purchased your favorite book! 🎉
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaymentPage;
