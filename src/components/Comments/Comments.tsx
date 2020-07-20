import React from 'react'
import { Box, Typography } from '@material-ui/core';

import Comment from '../Comment/Comment';

const Comments = () => {
  return (
    <Box className="CommentsWrapper">
      <Typography className="Title">Comments</Typography>
      <Comment />
      <Comment />
      <Comment />
    </Box>
  )
}

export default Comments;
