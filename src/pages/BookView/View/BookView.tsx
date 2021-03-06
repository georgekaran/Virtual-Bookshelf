import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { MoreVert, Edit, Delete } from '@material-ui/icons';
import { 
  Container, 
  IconButton, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText, 
  Grid, 
  Divider, 
  Box, 
  Typography, 
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogActions, 
  Button, 
  DialogContentText} from '@material-ui/core';

import noImageSvg from '../../../assets/images/no-image.svg';
import BodyHeader from '../../../components/BodyHeader/BodyHeader';
import { BookModel, CategoryModel, Option } from '../../../protocols';
import Api from '../../../util/api/api';
import { dataURLToFile, timestampToStringDate } from '../../../util/utils';
import Select from '../../../components/Form/Select/Select';
import Comments from '../../../components/Comments/Comments';
import NewComment from '../../../components/NewComment/NewComment';
import ToastSuccess from '../../../components/Toast/ToastSuccess';
import ToastError from '../../../components/Toast/ToastError';
import { setLoading } from '../../../actions/loadingActions';

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

const CategorySchema = Yup.object().shape({
  category: Yup.mixed()
});

export default function BookView() {
  const [book, setBook] = useState<BookModel>();
  const [category, setCategory] = useState<CategoryModel>();
  const [categoriesOptions, setCategoriesOptions] = useState<Option[]>([]);
  const [isCategoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [isDelelteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const formCategory = useForm({
    resolver: yupResolver(CategorySchema),
  });

  const handleCategoryDialogClickOpen = () => {
    setCategoryDialogOpen(true);
  };

  const handleCategoryDialogClose = () => {
    setCategoryDialogOpen(false);
  };

  const handleDeleteDialogClickOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleCategorySubmit = async (values: any) => {
    if (book) {
      const bookEdited: BookModel = {
        ...book,
        category: values.category
      }
      Api.Book.save(bookEdited);
      setBook(bookEdited);
    }
  };

  const categoriesToOptions = () => {
    const categories = Api.Category.findAll();
    setCategoriesOptions(categories.map(c => ({
      value: c.id,
      label: c.title
    })))
  }

  useEffect(categoriesToOptions, [])

  const handleEditClick = () => {
    history.push(`/book/${book?.id}`)
  }

  const handleDeleteClick = async () => {
    try {
      dispatch(setLoading(true));
      await new Promise(resolve => setTimeout(resolve, 1000));
      handleDeleteDialogClose();

      if (book) {
        Api.Book.delete(book);
        ToastSuccess("Book deleted successfully");
        history.push('/');
      }
    } catch (e) {
      ToastError("Error while trying to delete book");
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
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
        {book ? (
          <>
          <BookViewHeader handleEditClick={() => handleEditClick()}
                          handleDeleteClick={() => handleDeleteDialogClickOpen()} />
          <Divider />
          <Grid container className="BookInfo">
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
                <IconButton className="EditIcon" 
                            onClick={handleCategoryDialogClickOpen}>
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Creation date: </Typography>
                <Typography className="Label__Value">{timestampToStringDate(book.timestamp)}</Typography>
              </Box>
              <Box display="flex" marginY="8px" alignItems="center">
                <Typography className="Label__Text">Description: </Typography>
                <Typography className="Label__Value">{book.description}</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Divider />
              <Comments bookId={book.id} />
              <Divider />
              <NewComment bookId={book.id} />
            </Grid>
          </Grid>
          </>
        ) : (
          <h5>Title</h5>
        )}
      </Grid>

      <Dialog open={isCategoryDialogOpen} onClose={handleCategoryDialogClose} aria-labelledby="form-dialog-title">
        <form onSubmit={formCategory.handleSubmit(handleCategorySubmit)}>
          <DialogTitle id="form-dialog-title">Change Book Category</DialogTitle>
          <DialogContent>
              <Select label="New category" 
                      name="category"
                      displayEmpty 
                      defaultValue={book?.category}
                      form={formCategory} 
                      options={categoriesOptions} />
          </DialogContent>
          <DialogActions>
            <Button color="primary" 
                    onClick={handleCategoryDialogClose}>
              Cancel
            </Button>
            <Button type="submit"
                    color="primary" 
                    onClick={handleCategoryDialogClose} >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog open={isDelelteDialogOpen} onClose={handleDeleteDialogClose} aria-labelledby="form-dialog-title">
        <form onSubmit={formCategory.handleSubmit(handleCategorySubmit)}>
          <DialogTitle id="form-dialog-title">Delete book</DialogTitle>
          <DialogContent>
              <DialogContentText>Are you sure you want to delete this book?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" 
                    onClick={handleDeleteDialogClose}>
              Cancel
            </Button>
            <Button color="primary" 
                    onClick={handleDeleteClick} >
              Delete
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  )
}
