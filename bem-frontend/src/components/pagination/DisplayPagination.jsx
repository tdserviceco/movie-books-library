import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { paginationNumberMovies, paginationNumberBooks } from '../../actions';
const DisplayPagination = ({ type, postPerPage, totalPosts }) => {
  const pageNumbers = [];
  let page;
  {
    type === 'movies' ? page = useSelector(state => state.paginationNumberMovies)
      :
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
                <Link type="button" to="#" className='movies__pagination__btn' onClick={() => dispatch(paginationNumberMovies(number))}>{number}</Link> :
                <Link type="button" to="#" className='books__pagination__btn' onClick={() => dispatch(paginationNumberBooks(number))}>{number}</Link>
            }
          </li>
        ))}
      </ul>
    </nav >
  );
};

export default DisplayPagination;