import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Button, 
  DialogActions, 
  DialogTitle, 
  Dialog, 
  DialogContentText, 
  DialogContent } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import userAvatar from '../../assets/images/user-avatar.jpg';
import { CommentModel, User } from '../../protocols';
import { timestampToStringDate } from '../../util/utils';
import { RootState } from '../../protocols/root-state';
import { deleteComment, addComment } from '../../actions/commentsActions';
import Api from '../../util/api/api';
import Input from '../Form/Input/Input';

interface CommentProps {
  comment: CommentModel
}

const EditCommentSchema = Yup.object().shape({
  comment: Yup.string().required('Required field')
});

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [user, setUser] = useState<User>();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state.user);

  const editCommentForm = useForm({
    resolver: yupResolver(EditCommentSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleEditSubmit = (values: any) => {
    const newComment: CommentModel = { ...comment, body: values.comment };
    Api.Comment.save(newComment);
    dispatch(addComment(newComment));
    setEditMode(false);
  }

  const handleDeleteDialogClickOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const fetchCommentUser = () => {
    // Don't have a user api, so instead i'll get the logged user
    if (userLogged) {
      setUser(userLogged);
    }
  }

  useEffect(fetchCommentUser, [comment, userLogged])

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleDeleteComment = () => {
    if (comment) {
      Api.Comment.delete(comment);
      dispatch(deleteComment(comment))
    }
    handleDeleteDialogClose();
  }

  return (
    <Box className="CommentWrapper">
      <Box display="flex" alignItems="center">
        <Avatar className="Avatar" 
                      alt="Awesome user" 
                      src={userAvatar} />
        <Typography className="UserInfo">{user && user.name}</Typography>
        <Typography className="CommentDate">{timestampToStringDate(comment.timestamp)}</Typography>
        <Box>
          <IconButton onClick={handleEdit}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton onClick={handleDeleteDialogClickOpen}>
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      {editMode ? (
        <form onSubmit={editCommentForm.handleSubmit(handleEditSubmit)}>
          <Input className="CommentValue"
                 name="comment" 
                 form={editCommentForm}
                 defaultValue={comment.body}
                 showLabel={false}>
            {comment.body}
          </Input>
          <Box display="flex" justifyContent="flex-end">
            <Button className="BtnPrimary" 
                    type="submit"
                    disabled={!editCommentForm.formState.isValid}>
              Edit comment
            </Button>
          </Box>
        </form>
        
      ) : (
        <Typography className="CommentValue">
          {comment.body}
        </Typography>
      )}
      

      <Dialog open={isDeleteDialogOpen} onClose={handleDeleteDialogClose} aria-labelledby="form-dialog-title">
        {comment && (
          <>
            <DialogTitle id="form-dialog-title">Delete comment</DialogTitle>
              <DialogContent>
                  <DialogContentText>{`Are you sure you want to delete comment ${comment.body}`}</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" 
                        onClick={handleDeleteDialogClose}>
                  Cancel
                </Button>
                <Button color="primary" 
                        onClick={handleDeleteComment} >
                  Delete
                </Button>
              </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}

export default Comment;
