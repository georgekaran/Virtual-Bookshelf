import { CommentModel } from "../protocols";

export const SET_COMMENTS = 'SET_COMMENTS';
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export const setComments = (comments: CommentModel[]) => ({
    type: SET_COMMENTS,
    comments
});

export const deleteComment = (comment: CommentModel) => ({
  type: DELETE_COMMENT,
  comment
});

export const addComment = (comment: CommentModel) => ({
  type: ADD_COMMENT,
  comment
});