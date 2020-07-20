import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoreVert, Edit, Delete } from '@material-ui/icons';
import { Container, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Grid, Divider, Box, Typography } from '@material-ui/core';

import noImageSvg from '../../../assets/images/no-image.svg';
import BodyHeader from '../../../components/BodyHeader/BodyHeader';
import { Book, Category } from '../../../protocols';
import Api from '../../../util/api/api';
import { dataURLToFile } from '../../../util/utils';

interface BookViewHeaderProps {
  handleEditClick: () => void
  handleDeleteClick: () => void
}

const BookViewHeader: React.FC<BookViewHeaderProps> = ({ handleDeleteClick, handleEditClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => {
    setAnchorEl(null);
  };

  const handleFnAndCloseMenu = (fn: () => void) => {
    fn()
    handleCloseOpenMenu()
  }

  return (
    <BodyHeader>
      <IconButton 
        aria-controls="book-actions-menu" 
        aria-haspopup="true" 
        component="span" 
        onClick={handleOpenMenu}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="book-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseOpenMenu}
      >
        <MenuItem onClick={() => handleFnAndCloseMenu(handleEditClick)}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem onClick={() => handleFnAndCloseMenu(handleDeleteClick)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </BodyHeader>
  )
}

export default function BookView() {
  const [book, setBook] = useState<Book>();
  const [category, setCategory] = useState<Category>();
  const [availableCategorie, setAvailableCategories] = useState<Book>();

  const { id } = useParams();

  const handleEditClick = () => {
    // TODO
  }

  const handleDeleteClick = () => {
    // TODO
  }

  const fetchBook = () => {
    const book = Api.Book.find(id);
    if (book && !book.deleted) {
      setBook(book);
    }
  }

  useEffect(fetchBook, [id])

  const fetchCategory = () => {
    if (book && book.category) {
      const category = Api.Category.find(book.category);
      if (category) {
        setCategory(category)
      }
    }
  }

  useEffect(fetchCategory, [book])

  return (
    <Container fixed className="Base__Container">
      <Grid item xs className="BodyView">
        <BookViewHeader handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick} />
        <Divider />
        {book ? (
          <Grid container xs>
            <Grid className="ImageWrapper" 
                  item 
                  xs={6}>
              <img className="BookCover" 
                    src={book.image ? URL.createObjectURL(dataURLToFile(book.image)) : noImageSvg} 
                    alt="Book cover" />
            </Grid>
            <Grid className="InfoWrapper" 
                  item 
                  xs={6}>
              <Typography className="Title" 
                          variant="h5" 
                          component="h5">{book.title}</Typography>
              <Divider style={{ marginBottom: 16 }} />
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Author: </Typography>
                <Typography className="Label__Value">{book.author}</Typography>
              </Box>
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Category: </Typography>
                <Typography className="Label__Value">{category && category.title}</Typography>
                <IconButton>
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Creation date: </Typography>
                <Typography className="Label__Value">{book.timestamp}</Typography>
              </Box>
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Description: </Typography>
                <Typography className="Label__Value">{book.description}</Typography>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <h5>Title</h5>
        )}
      </Grid>
    </Container>
  )
}
