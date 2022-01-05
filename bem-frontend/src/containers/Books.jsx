import React, { useEffect } from 'react';
import { Loader, GetBooks, Nav } from '../components';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../GraphQL/Queries';
import { useDispatch, useSelector } from 'react-redux';
import { paginationDataBooks } from '../actions';

const Books = () => {

  const dispatch = useDispatch()
  const pageNumber = useSelector(state => state.paginationNumberBooks)
  const { error, loading, data } = useQuery(QUERY_BOOKS, {
    variables: {
      page: pageNumber
    }
  });

  const fetchData = () => {
    !loading && dispatch(paginationDataBooks(data))
  }

  useEffect(() => {
    document.title = 'Books'
    fetchData()
  })
  return (
    <>
      <Nav loading={loading} />
      <section className='books'>
        {loading && <Loader />}
        {!loading && <GetBooks type='books' />}
      </section>
    </>
  );
};

export default Books;