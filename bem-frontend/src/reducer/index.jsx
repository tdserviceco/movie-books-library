import { combineReducers } from 'redux'
import { paginationDataMovies, paginationDataBooks, paginationNumberMovies, paginationNumberBooks } from './pagination';
const allReducers = combineReducers({
  paginationDataMovies: paginationDataMovies,
  paginationNumberMovies: paginationNumberMovies,
  paginationDataBooks: paginationDataBooks,
  paginationNumberBooks: paginationNumberBooks
})

export default allReducers;