import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import BookCard from '../BookCard/BookCard';
import { CategoryModel, BookModel } from '../../protocols';
import Api from '../../util/api/api';
import { RootState } from '../../protocols/root-state';
import { SORT_ALPHABETICALLY, SORT_DATE_ASC, SORT_DATE_DESC } from '../../actions/sortActions';
import sortAlphabetically from '../../sort/sortAlphabetically';
import sortDateAsc from '../../sort/sortDateAsc';
import sortDateDesc from '../../sort/sortDateDesc';

interface BookListProps {
  category: CategoryModel;
  showButtonMore?: boolean;
  limit?: number;
}

export default function BookList({ category, showButtonMore = true, limit = -1 }: BookListProps) {
  const [limitCards, setLimitCards] = useState(limit);
  const [books, setBooks] = useState<BookModel[]>([]);
  const [booksFiltered, setBooksFiltered] = useState<BookModel[]>([]);

  const  history = useHistory();
  const { width } = useWindowSize();
  const search = useSelector((state: RootState) => state.search);
  const sortName = useSelector((state: RootState) => state.sort);

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
    let tempBooksFiltered = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
    switch (sortName) {
      case SORT_ALPHABETICALLY:
        tempBooksFiltered = sortAlphabetically<BookModel>("title", tempBooksFiltered);
        break;
      case SORT_DATE_ASC:
        tempBooksFiltered = sortDateAsc<BookModel>("timestamp", tempBooksFiltered);
        break;
      case SORT_DATE_DESC:
        tempBooksFiltered = sortDateDesc<BookModel>("timestamp", tempBooksFiltered);
        break;
    }
    setBooksFiltered(tempBooksFiltered);
  }, [search, books, sortName])

  const isShowingThreeCards = () => {
    return limitCards === 3
  }

  const booksArray = (): BookModel[] => {
    return limitCards === -1 ? booksFiltered : booksFiltered.slice(0, limitCards);
  }

  const handleSeeMoreClick = () => {
    history.push(`/category/${category.name}`);
  };

  return (
    <Box className="BookList" component="div" marginY={3}>
      <Box className="BookList__Header">
        <Typography className="Title" component="h4">
          {category.title}
        </Typography>
        {showButtonMore && booksFiltered.length > 0 && (
          <Button endIcon={<ArrowForwardIcon />} color="primary" onClick={handleSeeMoreClick}>
            See more
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        {booksFiltered.length === 0 ? (
          <>
            {new Array(6).fill(0).map((_, idx) => (
              <Grid key={idx} 
                    item 
                    xs={isShowingThreeCards() ? 4 : 2}>
                <BookCard book={null} />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {booksArray().map((book) => (
              <Grid key={book.id} 
                    item 
                    xs={isShowingThreeCards() ? 4 : 2}>
                <BookCard book={book} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}
