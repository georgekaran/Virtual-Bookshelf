import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import BookCard from './BookCard/BookCard';

interface BookListProps {
  title: string;
}

export default function BookList({ title }: BookListProps) {
  return (
    <Box className="BookList" 
          component="div" 
          m={1}>
      <Typography className="Title" component="h4">{title}</Typography>
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
      </Grid>
    </Box>
  );
}
