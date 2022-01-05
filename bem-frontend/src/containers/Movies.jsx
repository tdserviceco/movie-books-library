import React, { useEffect } from 'react';
import { Loader, GetMovies, Nav } from '../components';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../GraphQL/Queries';
import { useDispatch, useSelector } from 'react-redux';
import { paginationDataMovies } from '../actions';
const Movies = () => {

  const dispatch = useDispatch()
  const pageNumber = useSelector(state => state.paginationNumberMovies)

  const { error, loading, data } = useQuery(QUERY_MOVIES, {
    variables: {
      page: pageNumber
    }
  });

  const fetchData = () => {
    !loading && dispatch(paginationDataMovies(data))
  }

  useEffect(() => {
    document.title = 'Movies'
    fetchData()
  })
  return (
    <>
      <Nav loading={loading} />
      <section className='movies'>
        {loading && <Loader />}
        {!loading && <GetMovies type={'movies'} />}
      </section>
    </>
  );
};

export default Movies;