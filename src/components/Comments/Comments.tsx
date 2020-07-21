import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import Comment from '../Comment/Comment';
import Api from '../../util/api/api';
import { setComments } from '../../actions/commentsActions';
import { RootState } from '../../protocols/root-state';

interface CommentsProps {
  bookId: string
}

const Comments: React.FC<CommentsProps> = ({ bookId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments);

  const fetchComments = () => {
    if (bookId) {
      dispatch(setComments(Api.Comment.findByBook(bookId)));
    }
  }

  useEffect(fetchComments, [bookId])

  useEffect(() => {
    console.log(comments)
  }, [comments])

  return (
    <Box className="CommentsWrapper">
      <Typography className="Title">Comments({comments.length})</Typography>
      {comments.map(comment => (
        <Comment key={comment.id} 
                 comment={comment} />
      ))}
    </Box>
  )
}

export default Comments;
