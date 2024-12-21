import * as React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

// Styled TableCell to improve appearance
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
  },
}));

// Styled TableRow for alternating row colors
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const BooksTable = ({ books }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="books table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Publish Year</StyledTableCell>
            <StyledTableCell>Operations</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <StyledTableRow key={book._id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell>{book.title}</StyledTableCell>
              <StyledTableCell>{book.author}</StyledTableCell>
              <StyledTableCell>{book.publishYear}</StyledTableCell>
              <StyledTableCell>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <IconButton color="primary">
                      <BsInfoCircle className="text-2xl" />
                    </IconButton>
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <IconButton color="warning">
                      <AiOutlineEdit className="text-2xl" />
                    </IconButton>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <IconButton color="error">
                      <MdOutlineDelete className="text-2xl" />
                    </IconButton>
                  </Link>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BooksTable;
