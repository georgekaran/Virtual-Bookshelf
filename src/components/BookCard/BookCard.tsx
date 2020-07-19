import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Paper, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { Book } from '../../protocols';

interface BookCardProps {
  book: Book | null;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const history = useHistory();

  const handleRedirectBookView = (bookId: string | null) => {
    if (bookId) {
      history.push(`/book/${bookId}`);
    }
  };

  const isTruthyBook = () => {
    return !!book
  }

  return (
    <Paper className={`BookCard ${!isTruthyBook() ? 'Disable' : ''}`} elevation={2} onClick={() => handleRedirectBookView(isTruthyBook() ? book!.id : null)}>
      {book ? (
        <>
          <img src={book.image || ''} alt="Book Cover" />
          <div className="InfoWrapper">
            <Typography className="Title" component="label">
              {book.title}
            </Typography>
            <Typography className="Author" component="label">
              {book.author}
            </Typography>
          </div>
        </>
      ) : (
        <Box className="Skeleton">
          <Skeleton className="Image" 
                    animation={false} 
                    variant="rect" 
                    width="100%" />
          <Skeleton className="Title" 
                    animation={false} 
                    variant="text" 
                    width="100%"
                    height="24px" />
          <Skeleton className="Title" 
                    animation={false} 
                    variant="text" 
                    width="70%"
                    height="16px" />
        </Box>
      )}
    </Paper>
  );
};

export default BookCard;
