import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import BookCard from './BookCard/BookCard';

interface BookListProps {
  title: string;
  category?: string | null;
}

export default function BookList({ title, category = null }: BookListProps) {
  let history = useHistory();

  const handleSeeMoreClick = () => {
    history.push(`/category/${category}`);
  };

  return (
    <Box className="BookList" component="div" marginY={3}>
      <Box className="BookList__Header">
        <Typography className="Title" component="h4">
          {title}
        </Typography>
        {category && (
          <Button endIcon={<ArrowForwardIcon />} 
                  color="primary"
                  onClick={handleSeeMoreClick}>
            Ver mais
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        <Grid item xs>
          <BookCard />
        </Grid>
        <Grid item xs>
          <BookCard />
        </Grid>
        <Grid item xs>
          <BookCard />
        </Grid>
        <Grid item xs>
          <BookCard />
        </Grid>
        <Grid item xs>
          <BookCard />
        </Grid>
        <Grid item xs>
          <BookCard />
        </Grid>
      </Grid>
    </Box>
  );
}
