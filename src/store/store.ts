import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import commentsReducer from '../reducers/commentsReducer';

export default createStore(
  combineReducers({
    user: userReducer,
    comments: commentsReducer,
}))