import { RESET_SEARCH, SET_SEARCH } from '../actions/searchActions';

let searchDefaultState: string = "";

const searchReducer = (state = searchDefaultState, action: any) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;
    case RESET_SEARCH:
      return action.search;
    default:
      return state
  }
};

export default searchReducer