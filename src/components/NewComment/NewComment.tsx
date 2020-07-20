import React from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Box, Typography, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import Input from '../Form/Input/Input'

const NewCommentSchema = Yup.object().shape({
  comment: Yup.string().required('Required field')
});

export default function NewComment() {

  const newCommentForm = useForm({
    resolver: yupResolver(NewCommentSchema),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <Box className="NewCommentWrapper">
      <form onSubmit={newCommentForm.handleSubmit(handleSubmit)}>
        <Typography className="Title">Post a new comment</Typography>
        <Input name="comment" 
              form={newCommentForm} 
              showLabel={false}
              multiline
              placeholder="Type here to write your comment"
              rows={4} />
        <Box display="flex" justifyContent="flex-end">
          <Button className="BtnPrimary" 
                  type="submit">
            Post comment
          </Button>
        </Box>
      </form>
    </Box>
  )
}
