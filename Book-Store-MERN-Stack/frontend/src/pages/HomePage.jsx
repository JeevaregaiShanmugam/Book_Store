import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { Carousel, Card, Row, Col, Button } from 'antd';

// Sample images (replace with actual book images)
const bookImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NAubIg0UzgWFOP3T_NzSe_2gmW2t4Mx8Eg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrla8T1E4WIxaXbWmUKUeiV0HLEFk1NQBQn01j31qcnPgs6ggFEkNki76AKaTCs_sRo8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNc03JUjqZlpuxG6cjqnTPXbguwzYH7YpTIA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPr-UZyzTl6MB0VetZlFYEQ5v9VjGwGXxUg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_tp9o8n3VC9H31FiJP3ew04I__UgEiLkbA&s'
];

const userReviews = [
  { name: 'John Doe', review: 'Amazing book collection! Very user-friendly.' },
  { name: 'Jane Smith', review: 'I love how I can easily manage and explore books.' },
  { name: 'Mark Taylor', review: 'Great way to keep track of all my favorite books.' },
];

const HomePage = () => {
  return (
    <div className="relative p-6 bg-gray-50 min-h-screen">
      {/* Top Right Buttons */}
      <div className="absolute top-4 right-6 space-y-4">
        <Link to="/books">
          <Button className="bg-sky-500 text-white hover:bg-sky-600 w-40 mb-4" icon={<MdOutlineAddBox className="text-lg mr-2" />}>
            View Books
          </Button>
        </Link>
        <Link to="/books/create">
          <Button className="bg-green-500 text-white hover:bg-green-600 w-40" icon={<MdOutlineAddBox className="text-lg mr-2" />}>
            Add New Book
          </Button>
        </Link>
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Books Application</h1>
        <p className="mt-4 text-lg text-gray-600">Manage and explore your book collection effortlessly.</p>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center mb-8">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          <Carousel autoplay>
            {bookImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Book ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* About Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Application</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          This application helps you organize and manage your book collection in one place. You can add new books, view the list of books, and keep track of your reading journey with ease. Whether you're an avid reader or a casual one, this tool is designed for everyone!
        </p>
      </div>

      {/* User Reviews Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">What Our Users Say</h2>
        <Row gutter={[16, 16]} justify="center">
          {userReviews.map((review, index) => (
            <Col key={index} span={8}>
              <Card title={<span className="text-xl font-semibold">{review.name}</span>} bordered={false} className="shadow-lg">
                <p>{review.review}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Static Footer */}
      <div className="w-full bg-gray-800 text-white py-4 text-center fixed bottom-0 left-0">
        <p>&copy; 2024 Books Application. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
