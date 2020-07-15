import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import BookCard from './BookCard/BookCard';
import { Category } from '../../protocols';

interface BookListProps {
  category: Category;
  showButtonMore?: boolean
}

export default function BookList({ category, showButtonMore = true }: BookListProps) {
  let history = useHistory();

  const handleSeeMoreClick = () => {
    history.push(`/category/${category.name}`);
  };

  return (
    <Box className="BookList" component="div" marginY={3}>
      <Box className="BookList__Header">
        <Typography className="Title" component="h4">
          {category.title}
        </Typography>
        {showButtonMore && (
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
