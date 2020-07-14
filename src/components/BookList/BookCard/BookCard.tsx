import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const BookCard = () => {
  return (
    <Paper className="BookCard" elevation={2}>
      <img src="https://s26162.pcdn.co/wp-content/uploads/2018/12/81A9dFqIEEL.jpg" alt="Book Cover" />
      <div className="InfoWrapper">
        <Typography className="Title" component="label">
          Lorem ipsum dolor
        </Typography>
        <Typography className="Author" component="label">
          Lorem ipsum dolor
        </Typography>
      </div>
    </Paper>
  );
};

export default BookCard;
