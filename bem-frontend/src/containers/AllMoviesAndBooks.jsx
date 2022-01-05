import React, { useEffect, useState } from 'react';
import { Loader, GetAllBooks, GetAllMovies, Nav } from '../components';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_MOVIES_AND_BOOKS } from '../GraphQL/Queries';

const AllMoviesAndBooks = () => {

  const { error, loading, data } = useQuery(QUERY_ALL_MOVIES_AND_BOOKS);
  const [allMoviesAndBooks, setAllMoviesAndBooks] = useState(null)
  const fetchAll = () => {
    !loading && setAllMoviesAndBooks(data)
  }

  useEffect(() => {
    fetchAll()
  }, [data])
  return (
    <>
      <Nav loading={loading} />
      <section className='all-movies-and-books'>
        {loading && <Loader />}
        {!loading && allMoviesAndBooks !== null &&
          <div className='all-movies-and-books__container'>
            <GetAllMovies type={'movies'} movies={data.movies} />
            <GetAllBooks type={'books'} books={data.books} />
          </div>
        }
      </section>
    </>
  );
};

export default AllMoviesAndBooks;