import { createStore, combineReducers } from 'redux';

import userReducer from '../reducers/userReducer';
import commentsReducer from '../reducers/commentsReducer';
import searchReducer from '../reducers/searchReducer';
import sortReducer from '../reducers/sortReducer';
import loadingReducer from '../reducers/loadingReducer';

export default createStore(
  combineReducers({
    user: userReducer,
    comments: commentsReducer,
    search: searchReducer,
    sort: sortReducer,
    isLoading: loadingReducer,
}))