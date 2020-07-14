import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import BookCard from './BookCard/BookCard';

interface BookListProps {
  title: string;
}

export default function BookList({ title }: BookListProps) {
  return (
    <Box className="BookList" 
         component="div" 
         m={1}>
      <Box className="BookList__Header">
        <Typography className="Title" 
                    component="h4">
          {title}
        </Typography>
        <Button endIcon={<ArrowForwardIcon />} 
                color="primary">
          Ver mais
        </Button>
      </Box>
      <Grid container 
            spacing={3}>
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
