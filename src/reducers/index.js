import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // key : books, value: bookreducer
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
