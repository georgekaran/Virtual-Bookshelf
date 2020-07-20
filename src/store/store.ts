import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

export default createStore(
  combineReducers({
    user: userReducer
}))