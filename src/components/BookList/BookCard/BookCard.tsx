import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

import { Book } from '../../../protocols';

interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const history = useHistory();

  const handleRedirectBookView = (bookId: string) => {
    history.push(`/book/${bookId}`);
  }

  return (
    <Paper className="BookCard" 
           elevation={2} 
           onClick={() => handleRedirectBookView(book.id)}>
      <img src={book.image || ""} alt="Book Cover" />
      <div className="InfoWrapper">
        <Typography className="Title" component="label">
          {book.title}
        </Typography>
        <Typography className="Author" component="label">
          {book.author}
        </Typography>
      </div>
    </Paper>
  );
};

export default BookCard;
