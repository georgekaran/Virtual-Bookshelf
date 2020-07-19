import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { useWindowSize } from 'react-use';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import BookCard from '../BookCard/BookCard';
import { Category, Book } from '../../protocols';
import Api from '../../util/api/api';

interface BookListProps {
  category: Category;
  showButtonMore?: boolean;
  limit?: number;
}

export default function BookList({ category, showButtonMore = true, limit = -1 }: BookListProps) {
  const { width } = useWindowSize();
  const [limitCards, setLimitCards] = useState(limit);
  const [books, setBooks] = useState<Book[]>();
  let history = useHistory();

  const fetchBooks = () => {
    const booksCategory = Api.Book.findByCategory(category.id);
    setBooks(booksCategory);
  };

  useEffect(fetchBooks, [category]);

  const updateCardsLimit = () => {
    const widthContainer = 960;
    if (width < widthContainer) {
      setLimitCards(3);
    } else {
      setLimitCards(limit);
    }
  };

  useEffect(updateCardsLimit, [width])

  useEffect(() => {
    console.log(books);
  }, [books]);

  const isShowingThreeCards = () => {
    return limitCards === 3
  }

  const handleSeeMoreClick = () => {
    history.push(`/category/${category.id}`);
  };

  return (
    <Box className="BookList" component="div" marginY={3}>
      <Box className="BookList__Header">
        <Typography className="Title" component="h4">
          {category.title}
        </Typography>
        {showButtonMore && (
          <Button endIcon={<ArrowForwardIcon />} color="primary" onClick={handleSeeMoreClick}>
            Ver mais
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        {isEmpty(books) ? (
          <>
            {new Array(limitCards).fill(0).map(() => (
              <Grid item xs={isShowingThreeCards() ? 4 : 2}>
                <BookCard book={null} />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {books?.slice(0, limitCards).map((book) => (
              <Grid key={book.id} item xs={isShowingThreeCards() ? 4 : 2}>
                <BookCard book={book} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}
