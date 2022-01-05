import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginationNumberMovies, paginationNumberBooks } from '../../actions';
const DisplayPagination = ({ type, postPerPage, totalPosts }) => {
  const pageNumbers = [];
  let page;
  {
    type === 'movies' ?
      page = useSelector(state => state.paginationNumberMovies) :
      page = useSelector(state => state.paginationNumberBooks)
  }
  console.log(page)
  const dispatch = useDispatch()
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination' role="list">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === page ? 'active' : ''}`}>
            {
              type === 'movies' ?
                <button type="button" className='movies__pagination__btn' onClick={() => dispatch(paginationNumberMovies(number))}>{number}</button> :
                <button type="button" className='books__pagination__btn' onClick={() => dispatch(paginationNumberBooks(number))}>{number}</button>
            }

          </li>
        ))}
      </ul>
    </nav >
  );
};

export default DisplayPagination;