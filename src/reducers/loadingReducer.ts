import { SET_LOADING } from '../actions/loadingActions';

let commentsDefaultState = false

const loadingReducer = (state = commentsDefaultState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading
    default:
      return state
  }
};

export default loadingReducer