import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code'; // Correct import for react-qr-code
import { useState } from 'react';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title = 'Unknown Book', price = 0, imageUrl = '' } = location.state || {};

  // Dynamically create payment data for QR code
  const paymentData = {
    name: title,
    price,
  };

  const qrValue = JSON.stringify(paymentData); // QR code value

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handle Submit Button
  const handlePaymentSubmit = () => {
    setShowModal(true); // Show modal on payment submit
  };

  // Handle closing the modal and navigating
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user'); // Navigate to UserHomePage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center space-x-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">Price: ₹{price}</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h3>
          <QRCode
            value={qrValue} // The data to encode in the QR code
            size={200} // Size of the QR code
            bgColor="#ffffff" // Background color
            fgColor="#000000" // Foreground color
            style={{ marginLeft: '25%' }}
          />
          <p className="mt-2 text-gray-500">
            Use any UPI app to scan and complete your payment.
          </p>
        </div>
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-center mb-4">Congratulations!</h2>
            <p className="text-center mb-4">You have successfully purchased "{title}".</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={handleCloseModal}
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
