import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoreVert, Edit, Delete } from '@material-ui/icons';
import { Container, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core';

import BodyHeader from '../../../components/BodyHeader/BodyHeader';
import { Book } from '../../../protocols';
import Api from '../../../util/api/api';

export default function BookView() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [book, setBook] = useState<Book>()
  const { id } = useParams();

  const handleOpenMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => {
    setAnchorEl(null);
  };

  const fetchBook = () => {
    const book = Api.Book.find(id);
    if (book && !book.deleted) {
      setBook(book);
    }
  }

  useEffect(fetchBook, [id])

  return (
    <Container fixed className="Base__Container">
      <Grid item xs className="BodyView">
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
            <MenuItem onClick={handleCloseOpenMenu}>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </MenuItem>
            <MenuItem onClick={handleCloseOpenMenu}>
              <ListItemIcon>
                <Delete fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </MenuItem>
          </Menu>
        </BodyHeader>
      </Grid>
    </Container>
  )
}
