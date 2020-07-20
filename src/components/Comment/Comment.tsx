import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Avatar, Typography } from '@material-ui/core';

import userAvatar from '../../assets/images/user-avatar.jpg';
import { CommentModel, User } from '../../protocols';
import { timestampToStringDate } from '../../util/utils';
import { RootState } from '../../protocols/root-state';

interface CommentProps {
  comment: CommentModel
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [user, setUser] = useState<User>();
  const userLogged = useSelector((state: RootState) => state.user);

  const fetchCommentUser = () => {
    // Don't have a user api, so instead i'll get the logged user
    if (userLogged) {
      setUser(userLogged);
    }
  }

  useEffect(fetchCommentUser, [comment, userLogged])

  return (
    <Box className="CommentWrapper">
      <Box display="flex" alignItems="center">
        <Avatar className="Avatar" 
                      alt="Awesome user" 
                      src={userAvatar} />
        <Typography className="UserInfo">{user && user.name}</Typography>
        <Typography className="CommentDate">{timestampToStringDate(comment.timestamp)}</Typography>
      </Box>
      <Typography className="CommentValue">
        {comment.body}
        </Typography>
    </Box>
  )
}

export default Comment;
