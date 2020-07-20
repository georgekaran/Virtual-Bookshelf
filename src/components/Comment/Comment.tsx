import React from 'react'
import { Box, Avatar, Typography } from '@material-ui/core';

import userAvatar from '../../assets/images/user-avatar.jpg';

const Comment = () => {
  return (
    <Box className="CommentWrapper">
      <Box display="flex" alignItems="center">
        <Avatar className="Avatar" 
                      alt="Awesome user" 
                      src={userAvatar} />
        <Typography className="UserInfo">User 1</Typography>
        <Typography className="CommentDate">05/07/2020 15:23</Typography>
      </Box>
      <Typography className="CommentValue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta repudiandae itaque ratione tempore, 
        fuga, iste eligendi, veritatis quo est expedita! Magni ipsum vitae commodi totam ex repellat, beatae nihil.
        </Typography>
    </Box>
  )
}

export default Comment;
