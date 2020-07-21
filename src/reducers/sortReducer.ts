import { SORT_ALPHABETICALLY, SORT_DATE_ASC, SORT_DATE_DESC } from '../actions/sortActions';

type sortType = typeof SORT_ALPHABETICALLY | typeof SORT_DATE_ASC | typeof SORT_DATE_DESC

let sortDefaultState: sortType = "SORT_DATE_DESC";

const sortReducer = (state = sortDefaultState, action: any) => {
  switch (action.type) {
    case SORT_ALPHABETICALLY:
    case SORT_DATE_DESC:
    case SORT_DATE_ASC:
      return action.sort;
    default:
      return state
  }
};

export default sortReducer