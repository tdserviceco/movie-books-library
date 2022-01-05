import React from 'react';
import { DisplayPosts, Pagination } from '..';
import { useSelector } from 'react-redux';
const GetMovies = ({ type }) => {
  const movieData = useSelector(state => state.paginationDataMovies);
  if (movieData === null) {
    return (<></>)
  }
  else {
    const { movies } = movieData;
    return (
      <>
        {movies !== null &&
          <div className={`${type}__container`}>
            <h2 className={`${type}__container-title`}>{movies.data.length > 1 ? 'Filmer' : 'Film'}  ({movies.meta.pagination.total})</h2>
            <div className={`${type}__container__gallery`}>
              <div className={`${type}__container__gallery__posts`}>
                <DisplayPosts posts={movies.data} type={type} />
              </div>
              <Pagination type='movies' meta={movies.meta.pagination} />
            </div>
          </div>
        }
      </>
    );
  }

};

export default GetMovies;