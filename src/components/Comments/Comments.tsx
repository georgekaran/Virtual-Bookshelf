import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

import Comment from '../Comment/Comment';
import Api from '../../util/api/api';
import { setComments } from '../../actions/commentsActions';
import { RootState } from '../../protocols/root-state';
import { CommentModel } from '../../protocols';
import sortDateDesc from '../../sort/sortDateDesc';

interface CommentsProps {
  bookId: string
}

const Comments: React.FC<CommentsProps> = ({ bookId }) => {
  const [commentsSorted, setcommentsSorted] = useState<CommentModel[]>([])

  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments);

  const fetchComments = () => {
    if (bookId) {
      dispatch(setComments(Api.Comment.findByBook(bookId)));
    }
  }

  useEffect(fetchComments, [bookId])

  const sortCommentsByDate = () => {
    setcommentsSorted(sortDateDesc<CommentModel>("timestamp", comments))
  }

  useEffect(sortCommentsByDate, [comments])

  return (
    <Box className="CommentsWrapper">
      <Typography className="Title">Comments({commentsSorted.length})</Typography>
      {commentsSorted.map(comment => (
        <Comment key={comment.id} 
                 comment={comment} />
      ))}
    </Box>
  )
}

export default Comments;
