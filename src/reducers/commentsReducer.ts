import { ADD_COMMENT, SET_COMMENTS, DELETE_COMMENT } from '../actions/commentsActions';
import { CommentModel } from '../protocols';

let commentsDefaultState: CommentModel[] = [];

const commentsReducer = (state = commentsDefaultState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [ ...state.filter(c => c.id !== action.comment.id), action.comment ]
    case SET_COMMENTS:
      return [ ...action.comments ]
    case DELETE_COMMENT:
      return state.filter(c => c.id !== action.comment.id)
    default:
      return state
  }
};

export default commentsReducer