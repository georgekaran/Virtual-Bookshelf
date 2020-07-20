import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Box, Typography, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import Input from '../Form/Input/Input'
import { RootState } from '../../protocols/root-state';
import { CommentModel } from '../../protocols';
import { randomId } from '../../util/utils';
import Api from '../../util/api/api';

const NewCommentSchema = Yup.object().shape({
  comment: Yup.string().required('Required field')
});

interface NewCommentProps {
  bookId: string
}

const NewComment: React.FC<NewCommentProps> = ({ bookId }) => {
  const user = useSelector((state: RootState) => state.user);

  const newCommentForm = useForm({
    resolver: yupResolver(NewCommentSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const { isValid } = newCommentForm.formState;

  const handleSubmit = (values: any) => {
    const { comment } = values

    const commentToSave: CommentModel = {
      id: randomId(),
      parentId: bookId,
      timestamp: Date.now(),
      body: comment,
      author: user.id,
      deleted: false
    }

    Api.Comment.save(commentToSave);
  }

  return (
    <Box className="NewCommentWrapper">
      <form onSubmit={newCommentForm.handleSubmit(handleSubmit)}>
        <Typography className="Section__Title">Post a new comment</Typography>
        <Input name="comment" 
              form={newCommentForm} 
              showLabel={false}
              multiline
              placeholder="Type here to write your comment"
              rows={4} />
        <Box display="flex" justifyContent="flex-end">
          <Button className="BtnPrimary" 
                  type="submit"
                  disabled={!isValid}>
            Post comment
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default NewComment;