import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core';

import Comment from '../Comment/Comment';
import { CommentModel } from '../../protocols';
import Api from '../../util/api/api';

interface CommentsProps {
  bookId: string
}

const Comments: React.FC<CommentsProps> = ({ bookId }) => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  const fetchComments = () => {
    if (bookId) {
      setComments(Api.Comment.findByBook(bookId));
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
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  )
}

export default Comments;
